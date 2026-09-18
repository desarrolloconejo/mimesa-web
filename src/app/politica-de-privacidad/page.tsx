import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  UserCheck,
  Mail,
  ChevronRight,
  Scale,
  Clock,
  Building,
} from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Política de Privacidad | Grupo Mimesa - Protección de Datos",
  description:
    "Conoce las políticas de privacidad y tratamiento de datos personales de Grupo Mimesa (MIMESA ALIMENTOS C.A.). Compromiso con la confidencialidad, seguridad y derechos de nuestros usuarios.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02afab] selection:text-white">
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="cyan" className="top-12 -left-48 w-[650px] h-[650px] opacity-15" />
        <GlowOrb color="green" className="top-1/3 -right-48 w-[600px] h-[600px] opacity-10" />
        <GlowOrb color="lime" className="bottom-20 left-1/4 w-[550px] h-[550px] opacity-10" />

        {/* Hero / Header Section */}
        <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 border-b border-gray-150/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            
            {/* Breadcrumb */}
            <nav aria-label="Ruta de navegación" className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-[#02afab] transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#1a3c6a] font-bold">Política de Privacidad</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02afab]/10 border border-[#02afab]/20 text-[#02afab] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparencia & Confianza</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a3c6a] tracking-tight leading-[1.15]">
              Política de Privacidad y Tratamiento de Datos
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              En <strong className="font-semibold text-[#1a3c6a]">Grupo Mimesa</strong> valoramos tu confianza y protegemos tu privacidad. Esta política detalla con total claridad cómo recopilamos, utilizamos y resguardamos tus datos personales.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium pt-2">
              <Clock className="w-3.5 h-3.5 text-[#009539]" />
              <span>Última actualización: Septiembre de 2026</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-14 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

            {/* Quick Summary Bento Card */}
            <FadeIn delay={0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#1a3c6a]">
                  <div className="w-10 h-10 rounded-2xl bg-[#02afab]/15 text-[#02afab] flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-[#1a3c6a]">
                      1. Responsable del Tratamiento
                    </h2>
                    <p className="text-xs text-slate-500">Identidad legal y canales corporativos</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  El responsable del tratamiento de los datos recabados en este sitio web es:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-150">
                  <div>
                    <span className="font-bold text-[#1a3c6a] block">Razón Social:</span>
                    <span className="text-slate-600">MIMESA ALIMENTOS C.A.</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1a3c6a] block">Registro de Información Fiscal (RIF):</span>
                    <span className="text-slate-600">J-07032176-8</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1a3c6a] block">Sede Principal:</span>
                    <span className="text-slate-600">Caracas, Venezuela</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1a3c6a] block">Correo de Privacidad:</span>
                    <a href="mailto:contacto@grupomimesa.com" className="text-[#02afab] font-bold hover:underline">
                      contacto@grupomimesa.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 2: Datos Recopilados */}
            <FadeIn delay={0.15}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#009539]/10 text-[#009539] flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                    2. Datos Personales que Recopilamos
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Recopilamos únicamente la información necesaria y pertinente que tú decides proporcionarnos de manera libre y voluntaria a través de nuestros canales de contacto y formularios en línea:
                </p>

                <ul className="space-y-2.5 text-sm text-slate-600 font-light pl-4">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02afab] mt-2 shrink-0" />
                    <span><strong>Formulario de Contacto Comercial:</strong> Nombre y apellido, correo electrónico corporativo o personal, número telefónico o WhatsApp, área de interés y el contenido de tu mensaje o requerimiento.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02afab] mt-2 shrink-0" />
                    <span><strong>Formulario de Trabaja con Nosotros:</strong> Nombre y apellido, correo electrónico, teléfono, ubicación geográfica (ciudad/estado), área de especialidad laboral, síntesis curricular y enlaces profesionales a perfiles digitales (como LinkedIn).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02afab] mt-2 shrink-0" />
                    <span><strong>Datos de Navegación Técnica:</strong> Información anonimizada sobre dispositivo, resolución y rendimiento técnico para asegurar la estabilidad, velocidad y seguridad de la plataforma.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Section 3: Finalidad del Tratamiento */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#02afab]/15 text-[#02afab] flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                    3. Finalidad del Tratamiento de los Datos
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Los datos personales que nos suministras son tratados con las siguientes finalidades específicas:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Atención Comercial e Institucional</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Responder consultas sobre nuestro portafolio de alimentos de consumo masivo, harinas industriales, aceites y sal solar Produsal.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Reclutamiento y Selección</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Evaluar tu perfil profesional para vacantes presentes o futuras en nuestras plantas de producción, oficinas o centros de distribución.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Gestión de Alianzas y Proveeduría</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Canalizar propuestas comerciales, acuerdos agroindustriales y relaciones con distribuidores autorizados en todo el país.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Seguridad e Integridad del Sitio</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Prevenir el spam, fraudes electrónicos y garantizar el correcto funcionamiento de las interacciones en el portal.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 4: Base Legal y Consentimiento */}
            <FadeIn delay={0.25}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#94c11e]/20 text-[#009539] flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                    4. Base Legal y Consentimiento Expreso
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  La base legal que legitima el tratamiento de tus datos es tu <strong className="font-semibold text-[#1a3c6a]">consentimiento libre, informado e inequívoco</strong>. Al marcar la casilla de verificación en cualquiera de nuestros formularios antes de presionar el botón de envío, manifiestas tu conformidad con los términos expuestos en esta política.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-light italic">
                  En ningún momento comercializamos, vendemos, alquilamos ni transferimos tus datos a terceras empresas con fines publicitarios o lucrativos.
                </p>
              </div>
            </FadeIn>

            {/* Section 5: Conservación y Seguridad */}
            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#02afab]/15 text-[#02afab] flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                    5. Seguridad y Conservación de la Información
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  En Grupo Mimesa implementamos rigurosas medidas técnicas y organizativas para proteger tus datos contra alteración, pérdida, tratamiento o acceso no autorizado:
                </p>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#009539] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Cifrado y Conexión Segura (SSL/TLS)</h3>
                      <p className="text-xs text-slate-500 font-light">Todas las comunicaciones entre tu navegador y nuestros servidores viajan bajo protocolo HTTPS de 256 bits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#02afab] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Acceso Restringido</h3>
                      <p className="text-xs text-slate-500 font-light">Únicamente el personal autorizado de los departamentos Comercial y de Gestión Humana tiene acceso a la información recibida.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 6: Derechos del Usuario */}
            <FadeIn delay={0.35}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#009539]/10 text-[#009539] flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                    6. Tus Derechos como Titular de los Datos
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Tienes pleno derecho a controlar tu información en todo momento. Puedes solicitar:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                  <li className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009539] shrink-0" />
                    <span><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti.</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#02afab] shrink-0" />
                    <span><strong>Rectificación:</strong> Actualizar o corregir información errónea.</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#94c11e] shrink-0" />
                    <span><strong>Supresión:</strong> Solicitar la eliminación definitiva de tus registros.</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1a3c6a] shrink-0" />
                    <span><strong>Revocación:</strong> Retirar el consentimiento otorgado previamente.</span>
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-2">
                  Para ejercer cualquiera de estos derechos, basta con enviar un correo a{" "}
                  <a href="mailto:contacto@grupomimesa.com" className="text-[#02afab] font-bold hover:underline">
                    contacto@grupomimesa.com
                  </a>{" "}
                  indicando en el asunto <em>&quot;Protección de Datos Personales&quot;</em> y adjuntando una breve descripción de tu requerimiento.
                </p>
              </div>
            </FadeIn>

            {/* Section 7: Contacto Directo */}
            <FadeIn delay={0.4}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1a3c6a] to-[#0c223f] text-white space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#30deda]">
                  <Mail className="w-4 h-4" />
                  <span>Canal Oficial de Privacidad</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  ¿Tienes dudas sobre nuestra Política de Privacidad?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Estamos a tu entera disposición para resolver cualquier inquietud respecto al tratamiento y resguardo de tu información personal.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#02afab] hover:bg-[#009539] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#02afab]/20 transition-all duration-300"
                  >
                    <span>Ir a la página de Contacto</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  );
}
