"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, Filter } from "lucide-react";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Corporativo" | "Innovación & Nutrición" | "Compromiso Social" | "Marcas";
  date: string;
  readTime: string;
  imageSrc: string;
  tagColor: string;
}

const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "mimesa-fortalece-capacidad-molienda",
    title: "Grupo Mimesa fortalece su capacidad de molienda y procesamiento de trigo",
    excerpt:
      "Con nuevas inversiones en infraestructura y tecnología europea de punta, consolidamos el abastecimiento continuo de harinas de la más alta calidad para la industria nacional.",
    category: "Corporativo",
    date: "22 Sep 2026",
    readTime: "4 min",
    imageSrc: "/images/planta-la-encrucijada-molino.webp",
    tagColor: "#183c6b",
  },
  {
    id: "2",
    slug: "innovacion-nutricional-agroindustria",
    title: "Innovación nutricional: formulaciones avanzadas para la agroindustria venezolana",
    excerpt:
      "Nuestros laboratorios de control de calidad e investigación desarrollan soluciones nutricionales balanceadas con altos índices de conversión y rendimiento pecuario.",
    category: "Innovación & Nutrición",
    date: "18 Sep 2026",
    readTime: "5 min",
    imageSrc: "/images/mimesa-operaciones-7721.webp",
    tagColor: "#009539",
  },
  {
    id: "3",
    slug: "nutriendo-porvenir-programas-sociales",
    title: "Nutriendo el porvenir: balance de nuestros programas comunitarios del trimestre",
    excerpt:
      "A través de alianzas con comedores escolares y comunidades productivas, llevamos bienestar, suplementación y apoyo a más de 12.000 familias en el país.",
    category: "Compromiso Social",
    date: "14 Sep 2026",
    readTime: "3 min",
    imageSrc: "/images/voluntarios-actividad-0779.webp",
    tagColor: "#02aeaa",
  },
  {
    id: "4",
    slug: "fuerza-campo-soberania-alimentaria",
    title: "La fuerza del campo venezolano como pilar de nuestra soberanía alimentaria",
    excerpt:
      "Trabajamos mano a mano con productores locales, asegurando prácticas sostenibles, financiamiento técnico y acuerdos justos que impulsan el desarrollo agrario.",
    category: "Corporativo",
    date: "09 Sep 2026",
    readTime: "4 min",
    imageSrc: "/images/voluntarios-actividad-0014.webp",
    tagColor: "#183c6b",
  },
  {
    id: "5",
    slug: "presencia-mesa-evolucion-marcas-lideres",
    title: "Presencia en cada mesa: la evolución de nuestras marcas líderes en el hogar",
    excerpt:
      "Repasamos el posicionamiento de marcas históricas que forman parte de la identidad culinaria de Venezuela y su constante renovación en empaques y pureza.",
    category: "Marcas",
    date: "02 Sep 2026",
    readTime: "3 min",
    imageSrc: "/images/HOME-VATELIMAGEN.webp",
    tagColor: "#95c11e",
  },
  {
    id: "6",
    slug: "produsal-salinas-olivitos-pureza-solar",
    title: "Produsal y las salinas de Los Olivitos: pureza solar y preservación ambiental",
    excerpt:
      "En el corazón del Refugio de Fauna Silvestre Los Olivitos, producimos sal marina con energía 100% solar conviviendo en armonía con la colonia de flamencos más grande del Caribe.",
    category: "Innovación & Nutrición",
    date: "28 Ago 2026",
    readTime: "4 min",
    imageSrc: "/images/voluntarios-actividad-0105.webp",
    tagColor: "#009539",
  },
];

const CATEGORIES = [
  "Todas",
  "Corporativo",
  "Innovación & Nutrición",
  "Compromiso Social",
  "Marcas",
] as const;

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const filteredArticles =
    selectedCategory === "Todas"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === selectedCategory);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Barra de Filtros por Categoría */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-slate-200/80 mb-12">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#009539]" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#183c6b]">
            Categorías:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0e2440] text-white shadow-md shadow-[#0e2440]/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-[#0e2440]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grilla Editorial de Noticias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#02aeaa]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Portada con efecto de zoom suave */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge de Categoría Flotante */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: article.tagColor }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Cuerpo del Artículo */}
              <div className="p-6 sm:p-7 space-y-3">
                {/* Meta: Fecha y Tiempo de Lectura */}
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#02aeaa]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#009539]" />
                    {article.readTime}
                  </span>
                </div>

                {/* Titular */}
                <h3 className="text-lg sm:text-xl font-black text-[#183c6b] group-hover:text-[#02aeaa] transition-colors leading-snug tracking-tight font-heading">
                  {article.title}
                </h3>

                {/* Resumen */}
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Pie de Tarjeta con Enlace */}
            <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#009539] group-hover:text-[#02aeaa] transition-colors flex items-center gap-1.5 cursor-pointer">
                Leer noticia completa
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
