import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, Phone, CheckCircle2, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PROFILE_INFO } from '../data/education';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

type EmailPlatform = 'outlook' | 'gmail' | 'default';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [emailPlatform, setEmailPlatform] = useState<EmailPlatform>('outlook');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success'>('idle');
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    subject: string;
    body: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please include a message or inquiry.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getPlatformUrl = (platform: EmailPlatform, subject: string, body: string) => {
    const encodedTo = encodeURIComponent(PROFILE_INFO.email);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    switch (platform) {
      case 'outlook':
        return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
      case 'gmail':
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
      case 'default':
      default:
        return `mailto:${PROFILE_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const fullBody = `Hi Ravindran,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`;
    const subject = `[Portfolio] ${formData.subject}`;

    setLastSubmittedData({ subject, body: fullBody });

    // 1. Attempt EmailJS background dispatch if keys are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_p8txu85';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_63c6pgs';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'z7Q_j2X1_ydDtQil5';

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: PROFILE_INFO.email,
            to_name: 'Ravindran',
          },
          publicKey
        );
      } catch (emailErr) {
        console.warn('EmailJS background dispatch notification:', emailErr);
      }
    }

    // 2. Redirect the user to their selected email/Outlook platform pre-filled
    const redirectUrl = getPlatformUrl(emailPlatform, subject, fullBody);
    
    // Open chosen platform in new tab
    const newWindow = window.open(redirectUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup was blocked by browser, fallback to direct location redirect for default mailto
      if (emailPlatform === 'default') {
        window.location.href = redirectUrl;
      }
    }

    // 3. Update in-place status with success feedback and confetti
    setSubmissionStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    try {
      confetti({ particleCount: 60, spread: 75, origin: { y: 0.7 } });
    } catch (_) {}

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#030508] border-t border-teal-500/20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-3 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
            <span>Contact & Next Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Let's Start a Conversation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Whether discussing full-time opportunities, technical architectures, or meaningful engineering challenges, reach out directly.
          </p>
        </div>

        {/* What I Am Open To Right Now (Explicit Positioning) */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-teal-950/30 via-zinc-950/60 to-purple-950/30 border border-teal-500/30 max-w-4xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/15 text-teal-300 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider block">
                Availability & Roles Open To:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium mt-0.5">
                Full-Time AI Engineer, Machine Learning Engineer, and Data Scientist roles (Immediate / 2026).
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shrink-0">
            Available Immediately
          </span>
        </div>

        {/* Contact Grid: Direct Info + Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md space-y-4 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold">
                Direct Channels
              </h3>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-zinc-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">
                      {PROFILE_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PROFILE_INFO.phone}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${PROFILE_INFO.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs font-mono cursor-pointer"
                >
                  Call
                </a>
              </div>

              {/* LinkedIn Link */}
              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-teal-500/40 flex items-center justify-between gap-3 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                      linkedin.com/in/ravindran-a-892377248
                    </div>
                  </div>
                </div>
                <span className="text-xs text-zinc-500 group-hover:text-teal-300 font-mono">→</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-teal-500/40 flex items-center justify-between gap-3 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-white shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400">GitHub Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                      github.com/{PROFILE_INFO.githubUsername}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-zinc-500 group-hover:text-teal-300 font-mono">→</span>
              </a>

            </div>
          </div>

          {/* Contact Form with EmailJS & Platform Redirect */}
          <div className="lg:col-span-7">
            {submissionStatus === 'success' ? (
              <div className="p-8 rounded-2xl bg-zinc-950/80 border border-teal-500/40 backdrop-blur-md text-center space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                  <CheckCircle2 className="w-8 h-8 text-teal-400" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Opening Your Email Platform!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed mt-1">
                    Your message has been pre-filled. If the compose window didn't open automatically, choose your platform below to send directly to <strong className="text-teal-300">{PROFILE_INFO.email}</strong>:
                  </p>
                </div>

                {/* Direct Platform Quick Launchers */}
                {lastSubmittedData && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-md mx-auto pt-2">
                    <a
                      href={getPlatformUrl('outlook', lastSubmittedData.subject, lastSubmittedData.body)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
                    >
                      <span>Outlook Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={getPlatformUrl('gmail', lastSubmittedData.subject, lastSubmittedData.body)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md"
                    >
                      <span>Gmail Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={getPlatformUrl('default', lastSubmittedData.subject, lastSubmittedData.body)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 shadow-md"
                    >
                      <span>Mail App</span>
                      <Mail className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="pt-3 border-t border-zinc-800/80">
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-teal-300 bg-teal-950/60 hover:bg-teal-900 border border-teal-500/40 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md space-y-4 shadow-xl"
              >
                {/* Platform Redirect Selector */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-teal-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-teal-400" />
                      Redirect Destination
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      Sends to {PROFILE_INFO.email}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setEmailPlatform('outlook')}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all text-center cursor-pointer ${
                        emailPlatform === 'outlook'
                          ? 'bg-blue-600/30 border border-blue-500 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      Outlook Web
                    </button>

                    <button
                      type="button"
                      onClick={() => setEmailPlatform('gmail')}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all text-center cursor-pointer ${
                        emailPlatform === 'gmail'
                          ? 'bg-red-600/30 border border-red-500 text-red-200 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      Gmail Web
                    </button>

                    <button
                      type="button"
                      onClick={() => setEmailPlatform('default')}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all text-center cursor-pointer ${
                        emailPlatform === 'default'
                          ? 'bg-teal-600/30 border border-teal-500 text-teal-200 shadow-[0_0_12px_rgba(20,184,166,0.3)]'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      Default Mail
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Engineering Leader / Recruiter"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-zinc-800 focus:border-teal-400'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-zinc-800 focus:border-teal-400'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block font-mono">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Subject / Inquiry Type <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Engineer Role / Technical Interview"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-zinc-800 focus:border-teal-400'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block font-mono">{errors.subject}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ravindran, we reviewed your work on the Personal Memory RAG system and Pulse.ai..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-zinc-800 focus:border-teal-400'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block font-mono">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-mono font-bold text-white bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600 hover:from-teal-300 hover:to-purple-500 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-teal-200" />
                      <span>Sending & Redirecting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-teal-200" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
