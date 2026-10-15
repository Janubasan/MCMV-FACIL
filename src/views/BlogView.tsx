import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, MessageSquare, ChevronRight, X } from 'lucide-react';

export const BlogView: React.FC = () => {
  const { getWhatsAppUrl, setIsGuideModalOpen } = useApp();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
          Educação e Notícias
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Artigos & Orientações Práticas
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Tudo o que você precisa saber sobre financiamento, regras de crédito, FGTS e dicas para sair do aluguel.
        </p>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-emerald-700">{post.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span>·</span>
                <span>{post.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ler artigo completo</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsGuideModalOpen(true)}
                className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
              >
                Baixar Guia PDF
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Read Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 p-6 sm:p-10 space-y-6 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 border-b border-slate-100 pb-3">
              <span className="font-bold text-emerald-700">{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {selectedPost.title}
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                Ficou com alguma dúvida sobre este artigo?
              </h3>
              <p className="text-xs text-slate-600">
                Fale agora com nossos corretores especialistas e tire suas dúvidas no WhatsApp de graça.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl('round-robin', `Olá! Li o artigo "${selectedPost.title}" no blog do MCMV Sem Dúvidas e gostaria de orientações.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar com Corretor no WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    setIsGuideModalOpen(true);
                  }}
                  className="py-3 px-5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  Baixar Guia Completo MCMV (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
