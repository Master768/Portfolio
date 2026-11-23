import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Image, ShieldCheck, Cpu, Move3d } from 'lucide-react';

export const ThreeAvatarHoloCard: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  // Original photograph is the default profile image
  const [isAnime, setIsAnime] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const plaqueMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringsRef = useRef<THREE.LineSegments | null>(null);

  const textureAnimeRef = useRef<THREE.Texture | null>(null);
  const textureOrigRef = useRef<THREE.Texture | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 470;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Texture Loader - original photo is default
    const textureLoader = new THREE.TextureLoader();
    const texOrig = textureLoader.load('/profile_original.jpg');
    const texAnime = textureLoader.load('/profile_anime_nobg.png');
    texOrig.colorSpace = THREE.SRGBColorSpace;
    texAnime.colorSpace = THREE.SRGBColorSpace;
    textureOrigRef.current = texOrig;
    textureAnimeRef.current = texAnime;

    // 4. Dark Obsidian Backing Plaque (High contrast backing)
    const plaqueGeo = new THREE.PlaneGeometry(3.15, 3.95);
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.95
    });
    const plaqueMesh = new THREE.Mesh(plaqueGeo, plaqueMat);
    plaqueMesh.position.z = -0.06;
    scene.add(plaqueMesh);
    plaqueMeshRef.current = plaqueMesh;

    // Glowing wireframe border on the plaque
    const edgesGeom = new THREE.EdgesGeometry(plaqueGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    const wireframe = new THREE.LineSegments(edgesGeom, edgesMat);
    wireframe.position.z = 0.01;
    plaqueMesh.add(wireframe);

    // 5. Character Mesh (starts with original photo)
    const cardGeometry = new THREE.PlaneGeometry(3.0, 3.8, 32, 32);
    const cardMaterial = new THREE.MeshStandardMaterial({
      map: texOrig,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1.0
    });
    materialRef.current = cardMaterial;

    const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
    scene.add(cardMesh);
    meshRef.current = cardMesh;

    // 6. Cyber Ring Orbit (Aurora Teal & Purple)
    const ringGeo = new THREE.RingGeometry(2.1, 2.14, 64);
    const ringEdges = new THREE.EdgesGeometry(ringGeo);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x7928ca,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh = new THREE.LineSegments(ringEdges, ringMat);
    ringMesh.rotation.x = Math.PI / 3.2;
    scene.add(ringMesh);
    ringsRef.current = ringMesh;

    // Secondary inner teal ring
    const ringGeo2 = new THREE.RingGeometry(1.65, 1.68, 48);
    const ringEdges2 = new THREE.EdgesGeometry(ringGeo2);
    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.5
    });
    const ringMesh2 = new THREE.LineSegments(ringEdges2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 3.8;
    scene.add(ringMesh2);

    // 7. Surrounding Particle Halo
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 6;
      posArray[i + 1] = (Math.random() - 0.5) * 6;
      posArray[i + 2] = (Math.random() - 0.5) * 4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 8. Balanced Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 0.75);
    keyLight.position.set(0, 1, 4);
    scene.add(keyLight);

    const cyanPoint = new THREE.PointLight(0x00f2fe, 3.0, 10);
    cyanPoint.position.set(-3.2, 1.5, 2.5);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0x7928ca, 3.2, 10);
    purplePoint.position.set(3.2, -1.5, 2.5);
    scene.add(purplePoint);

    // 9. Fully Working 3D Rotation via Drag (Mouse & Touch) + Hover Tilt
    let isPointerDown = false;
    let prevX = 0;
    let prevY = 0;
    let rotVelocityX = 0;
    let rotVelocityY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      setIsDragging(true);
      prevX = e.clientX;
      prevY = e.clientY;
      rotVelocityX = 0;
      rotVelocityY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isPointerDown) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        prevX = e.clientX;
        prevY = e.clientY;

        rotVelocityY = deltaX * 0.012;
        rotVelocityX = deltaY * 0.012;

        targetRotY += rotVelocityY;
        targetRotX += rotVelocityX;

        // Clamp vertical pitch to keep card visible
        targetRotX = Math.max(-0.8, Math.min(0.8, targetRotX));
      } else {
        // Subtle responsive hover tilt when not dragging
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = normX * 0.38;
        targetRotX = -normY * 0.28;
      }
    };

    const onPointerUp = () => {
      isPointerDown = false;
      setIsDragging(false);
    };

    const onPointerLeave = () => {
      if (!isPointerDown) {
        targetRotX = 0;
        targetRotY = 0;
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerLeave);

    // 10. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for rotation
      if (cardMesh && plaqueMesh) {
        cardMesh.rotation.y += (targetRotY - cardMesh.rotation.y) * 0.08;
        cardMesh.rotation.x += (targetRotX - cardMesh.rotation.x) * 0.08;
        plaqueMesh.rotation.y = cardMesh.rotation.y;
        plaqueMesh.rotation.x = cardMesh.rotation.x;

        // Natural levitation wave
        const levitate = Math.sin(elapsedTime * 1.6) * 0.08;
        cardMesh.position.y = levitate;
        plaqueMesh.position.y = levitate;
      }

      if (ringMesh) {
        ringMesh.rotation.z = elapsedTime * 0.22;
      }

      if (ringMesh2) {
        ringMesh2.rotation.z = -elapsedTime * 0.32;
      }

      if (particles) {
        particles.rotation.y = elapsedTime * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointerleave', onPointerLeave);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle switching between Original Photo (Default) and Anime Avatar
  useEffect(() => {
    if (materialRef.current && textureAnimeRef.current && textureOrigRef.current) {
      if (isAnime) {
        materialRef.current.map = textureAnimeRef.current;
        materialRef.current.alphaTest = 0.08;
      } else {
        materialRef.current.map = textureOrigRef.current;
        materialRef.current.alphaTest = 0;
      }
      materialRef.current.needsUpdate = true;
    }
  }, [isAnime]);

  return (
    <div className="relative flex flex-col items-center">
      {/* 3D Canvas Box with Working Drag-to-Rotate */}
      <div
        ref={mountRef}
        className={`w-[320px] sm:w-[350px] md:w-[380px] h-[400px] sm:h-[440px] relative flex items-center justify-center select-none touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title="Click & drag to rotate in 3D"
      >
        {/* Floating Cybernetic HUD Overlays */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/90 border border-teal-500/40 text-[10px] font-mono text-teal-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.3)]">
            <Move3d className="w-3.5 h-3.5 text-teal-400" />
            <span>3D CARD • DRAG TO ROTATE</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-3 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/90 border border-purple-500/50 text-[10px] font-mono text-purple-300 backdrop-blur-md shadow-md">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>AI ENGINEER // VIT</span>
          </div>
        </div>

        {/* Floating status tag */}
        <div className="absolute bottom-4 left-3 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/90 border border-emerald-500/50 text-[10px] font-mono text-emerald-300 backdrop-blur-md shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>130K+ RAG • 0.97 R²</span>
          </div>
        </div>
      </div>

      {/* Interactive Style Switcher Pill - Original is Default */}
      <div className="mt-2 flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-full border border-teal-500/30 backdrop-blur-xl shadow-lg z-20">
        <button
          onClick={() => setIsAnime(false)}
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
            !isAnime
              ? 'bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Image className="w-3.5 h-3.5" />
          <span>Original Photo</span>
        </button>

        <button
          onClick={() => setIsAnime(true)}
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
            isAnime
              ? 'bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-200" />
          <span>Anime Avatar</span>
        </button>
      </div>

      <p className="mt-2 text-[11px] font-mono text-zinc-400">
        Click and drag to freely rotate in 3D
      </p>
    </div>
  );
};
