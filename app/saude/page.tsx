"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/site";
import FinalCtaBanner from "@/components/ui/final-cta-banner";
import "./saude.css";

const FAQ_ITEMS = [
  {
    q: "O CONVERT IA substitui a recepcionista?",
    a: "Não. A solução apoia tarefas iniciais e repetitivas, organiza informações e encaminha solicitações. A equipe humana continua responsável pelos atendimentos que exigem análise, decisão ou cuidado individual.",
  },
  {
    q: "A inteligência artificial responde dúvidas médicas?",
    a: "Não. O escopo é estritamente administrativo. A solução não diagnostica, interpreta sintomas, recomenda tratamentos ou substitui profissionais de saúde.",
  },
  {
    q: "Com quais agendas o sistema se integra?",
    a: "Integramos com sistemas que oferecem API ou webhook (como Google Agenda, Feegow, Clinicorp, iClinic, entre outros). Caso sua clínica utilize uma agenda sem integração aberta, o fluxo registra a solicitação e encaminha para sua equipe confirmar o horário.",
  },
  {
    q: "Como funciona a proteção de dados e LGPD?",
    a: "Tratamos os dados em conformidade com a Lei Geral de Proteção de Dados (LGPD). As conversas trafegam com criptografia, ficam sob controle da clínica e nunca são utilizadas para treinar modelos públicos de inteligência artificial.",
  },
  {
    q: "O diagnóstico de 20 minutos é realmente gratuito?",
    a: "Sim. Fazemos uma análise rápida de como sua clínica recebe e responde os contatos hoje. Só recomendamos a implantação paga se identificarmos ganho real para sua operação.",
  },
];

export default function SaudePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [leads, setLeads] = useState(200);
  const [ticket, setTicket] = useState(300);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const [leadName, setLeadName] = useState("");
  const [leadClinic, setLeadClinic] = useState("");
  const [leadSpecialty, setLeadSpecialty] = useState("");
  const [leadVolume, setLeadVolume] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const elements = document.querySelectorAll(".saude-root .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const lostPatients = Math.round(leads * 0.3);
  const lostRevenue = lostPatients * ticket;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Oi Lucas, vim pelo site da CONVERT IA e quero agendar meu diagnóstico gratuito de 20 min.\n\n*Nome:* ${leadName}\n*Clínica:* ${leadClinic}\n*Especialidade:* ${leadSpecialty}\n*Volume:* ${leadVolume} mensagens/mês`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="saude-root" style={{ background: "var(--bg-main)", color: "var(--text-primary)" }}>
      {/* HEADER FIXO MINIMALISTA */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="site-header">
        <div className="header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/" className="brand-logo" aria-label="Início CONVERT IA">
              <span className="logo-mark">C</span>
              <span className="logo-text">
                CONVERT <span className="logo-ia">IA</span>
              </span>
            </Link>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "999px",
                padding: "6px 12px",
                background: "rgba(255,255,255,0.04)",
                textDecoration: "none",
              }}
            >
              ← Voltar para o Hub
            </Link>
          </div>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#problema" className="nav-link">Diagnóstico</a>
            <a href="#solucao" className="nav-link">Como Funciona</a>
            <a href="#quem-somos" className="nav-link">Quem Somos</a>
            <a href="#precos" className="nav-link">Planos</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          <div className="header-cta">
            <a
              href={waLink("Oi, vim pelo site e quero agendar meu diagnóstico gratuito de 20 minutos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Diagnóstico Gratuito
            </a>
          </div>

          <button
            type="button"
            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
          <a href="#problema" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Diagnóstico</a>
          <a href="#solucao" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Como Funciona</a>
          <a href="#quem-somos" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Quem Somos</a>
          <a href="#precos" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Planos</a>
          <a href="#faq" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>FAQ</a>
          <a
            href={waLink("Oi, vim pelo site e quero agendar meu diagnóstico gratuito de 20 minutos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-nav-cta"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" id="inicio">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-eyebrow reveal">
                  <span className="eyebrow-dot" />
                  <span>Automação de atendimento no WhatsApp para clínicas</span>
                </div>

                <h1 className="hero-title reveal">
                  Seu próximo paciente<br />
                  pode estar esperando<br />
                  <span className="text-accent">uma resposta.</span>
                </h1>

                <p className="hero-subtitle reveal">
                  <strong>Responda todo contato em menos de 1 minuto, 24h por dia, e saiba quantos viraram consulta.</strong>
                </p>

                <p className="hero-body reveal">
                  Sua clínica recebe mensagens pelo WhatsApp e Instagram, mas nem sempre consegue responder na hora e acompanhar cada interessado? Estruturamos o atendimento inicial para sua equipe não perder oportunidades.
                </p>

                <div className="hero-tags reveal">
                  <span className="tag">Resposta imediata 24h</span>
                  <span className="tag">Triagem administrativa</span>
                  <span className="tag">Conformidade LGPD</span>
                </div>

                <div className="hero-actions reveal">
                  <a
                    href={waLink("Oi, vim pelo site e quero avaliar meu atendimento no diagnóstico gratuito de 20 min.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Agendar diagnóstico gratuito (20 min)
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="hero-visual reveal">
                <div className="chat-mock">
                  <div className="chat-topbar">
                    <span className="chat-status-dot" />
                    <span className="chat-label">WhatsApp · Instagram DM</span>
                    <span className="chat-badge">CONVERT IA</span>
                  </div>
                  <div className="chat-body">
                    <div className="chat-msg incoming">
                      <p>Olá! Gostaria de agendar uma consulta para esta semana.</p>
                      <span className="chat-time">21:14</span>
                    </div>
                    <div className="chat-msg outgoing">
                      <p>Olá! Obrigado pelo contato. Qual especialidade ou procedimento você está buscando?</p>
                      <span className="chat-time">21:14</span>
                    </div>
                    <div className="chat-msg incoming">
                      <p>Dermatologia.</p>
                      <span className="chat-time">21:15</span>
                    </div>
                    <div className="chat-msg outgoing">
                      <p>Perfeito! Já registrei seu interesse. Você prefere atendimento pela manhã ou à tarde? Nossa equipe confirma o horário na agenda.</p>
                      <span className="chat-time">21:15</span>
                    </div>
                    <div className="chat-status-row">
                      <span className="chat-status-chip">✓ Lead qualificado · Encaminhado para recepção</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA + CALCULADORA */}
        <section className="section problems-section section-white" id="problema">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">O DIAGNÓSTICO</p>
              <h2 className="section-title">
                O problema não é falta de demanda.<br />
                É perder pacientes por<br />
                <span className="text-accent-dark">demora no primeiro contato.</span>
              </h2>
              <p className="section-subtitle">
                Quando o volume de mensagens cresce sem uma estrutura conectada, sua clínica deixa receita na mesa todos os dias.
              </p>
            </div>

            <div className="problems-grid">
              <div className="problem-card reveal">
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="problem-step-badge">[ 01 ]</span>
                </div>
                <h3 className="problem-title">Mensagens fora do horário</h3>
                <p className="problem-desc">Contatos chegam à noite e nos finais de semana, ficando sem resposta até o dia seguinte — momento em que o paciente já agendou em outro lugar.</p>
              </div>

              <div className="problem-card reveal">
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="problem-step-badge">[ 02 ]</span>
                </div>
                <h3 className="problem-title">Interessados sem retorno</h3>
                <p className="problem-desc">Pessoas que pediram informações ficam sem follow-up porque a recepção não consegue acompanhar quais conversas ainda estão em aberto.</p>
              </div>

              <div className="problem-card reveal">
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <span className="problem-step-badge">[ 03 ]</span>
                </div>
                <h3 className="problem-title">Informações espalhadas</h3>
                <p className="problem-desc">Dados dispersos entre conversas de WhatsApp, planilhas e anotações avulsas, impedindo um histórico claro de cada solicitação.</p>
              </div>

              <div className="problem-card reveal">
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="problem-step-badge">[ 04 ]</span>
                </div>
                <h3 className="problem-title">Equipe sobrecarregada</h3>
                <p className="problem-desc">Recepcionistas ocupam horas respondendo às mesmas dúvidas básicas (endereço, convênios, valores), tirando foco de quem está na clínica.</p>
              </div>

              <div className="problem-card reveal">
                <div className="problem-card-top">
                  <div className="problem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="problem-step-badge">[ 05 ]</span>
                </div>
                <h3 className="problem-title">Sem visibilidade do funil</h3>
                <p className="problem-desc">Gestores não sabem quantos contatos chegaram no mês, quantos viraram consultas reais e onde os pacientes estão sendo perdidos.</p>
              </div>
            </div>

            <div className="roi-calculator reveal" id="calculadora">
              <div className="roi-header">
                <span className="roi-badge">SIMULADOR DE IMPACTO FINANCEIRO</span>
                <h3>Quanto sua clínica pode estar deixando na mesa por mês?</h3>
                <p>Ajuste os números abaixo para estimar a receita perdida por demora ou falta de acompanhamento (estimativa conservadora de 30% de perda).</p>
              </div>

              <div className="roi-grid">
                <div className="roi-inputs">
                  <div className="roi-field">
                    <div className="roi-label-row">
                      <label htmlFor="calc-leads">Contatos recebidos por mês</label>
                      <span className="roi-val-display">{leads} contatos</span>
                    </div>
                    <input
                      type="range"
                      id="calc-leads"
                      min={50}
                      max={1000}
                      step={10}
                      value={leads}
                      onChange={(e) => setLeads(Number(e.target.value))}
                    />
                  </div>

                  <div className="roi-field">
                    <div className="roi-label-row">
                      <label htmlFor="calc-ticket">Ticket médio por consulta/procedimento</label>
                      <span className="roi-val-display">R$ {ticket.toLocaleString("pt-BR")}</span>
                    </div>
                    <input
                      type="range"
                      id="calc-ticket"
                      min={100}
                      max={3000}
                      step={50}
                      value={ticket}
                      onChange={(e) => setTicket(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="roi-result-box">
                  <span className="roi-result-label">Perda estimada (30% sem retorno ágil)</span>
                  <div className="roi-result-patients">{lostPatients} pacientes/mês</div>
                  <div className="roi-result-money">
                    R$ {lostRevenue.toLocaleString("pt-BR")}<span>/mês</span>
                  </div>
                  <p className="roi-result-note">Recuperar apenas uma fração desses contatos já paga todo o sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO + COMO FUNCIONA */}
        <section className="section solution-section" id="solucao">
          <div className="container">
            <div className="solution-header reveal">
              <p className="section-label">COMO FUNCIONA NA PRÁTICA</p>
              <h2 className="section-title">
                O que entra, o que o <span className="text-accent">CONVERT IA</span> faz<br />
                e o que sua equipe recebe.
              </h2>
              <p className="solution-desc">
                Sem substituir sua recepção. A tecnologia filtra, responde dúvidas administrativas e entrega o paciente pronto para sua equipe concluir.
              </p>
            </div>

            <div className="pipeline-flow">
              <div className="pipeline-card reveal">
                <span className="pipeline-step">01 / ENTRADA</span>
                <h3>O paciente chama</h3>
                <p>Contato chega pelo WhatsApp ou Instagram DM a qualquer hora do dia ou da noite.</p>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">→</div>
              <div className="pipeline-card reveal">
                <span className="pipeline-step">02 / AÇÃO DA IA</span>
                <h3>Triagem em &lt; 1 minuto</h3>
                <p>Responde dúvidas administrativas aprovadas (valores, convênios, endereço), identifica a especialidade e registra o interesse.</p>
              </div>
              <div className="pipeline-arrow" aria-hidden="true">→</div>
              <div className="pipeline-card reveal">
                <span className="pipeline-step">03 / EQUIPE</span>
                <h3>Recepção no controle</h3>
                <p>Sua equipe recebe o contato organizado e com contexto para confirmar o agendamento (ou integrado direto à agenda).</p>
              </div>
            </div>

            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="feature-num">PASSO 01</div>
                <h3>Diagnóstico e Mapeamento</h3>
                <p>Analisamos seus canais atuais, gargalos de resposta e regras da clínica antes de escrever qualquer fluxo.</p>
              </div>

              <div className="feature-card reveal">
                <div className="feature-num">PASSO 02</div>
                <h3>Base Aprovada pela Clínica</h3>
                <p>Configuramos respostas administrativas e regras de encaminhamento 100% validadas com sua equipe.</p>
              </div>

              <div className="feature-card reveal">
                <div className="feature-num">PASSO 03</div>
                <h3>Confirmação e Lembretes</h3>
                <p>Fluxos para reduzir faltas com lembretes automáticos, além de reativação de pacientes inativos e pedido de avaliação no Google.</p>
              </div>

              <div className="feature-card feature-card--highlight reveal">
                <div className="feature-disclaimer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p>
                    <strong>Segurança e Ética Médica:</strong> O sistema atua apenas no escopo administrativo. Não diagnostica, não recomenda tratamentos e o atendimento humano permanece disponível a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section className="section about-section section-white" id="quem-somos">
          <div className="container">
            <div className="about-grid">
              <div className="about-photo-wrap reveal">
                <Image src="/lucas.jpg" alt="Lucas Casemiro — Fundador da CONVERT IA" width={400} height={500} className="about-photo" />
              </div>
              <div className="about-content reveal">
                <p className="section-label">QUEM ESTÁ POR TRÁS</p>
                <h2 className="section-title">Tecnologia pensada para a rotina real de clínicas.</h2>
                <p className="about-text">
                  Olá, eu sou o <strong>Lucas Casemiro</strong>. Desenvolvo sistemas, automações e fluxos de atendimento com inteligência artificial focados em resolver gargalos operacionais reais.
                </p>
                <p className="about-text">
                  Percebi que clínicas e consultórios investem alto em anúncios e estrutura física, mas perdem pacientes todos os dias por um motivo simples: a recepção não dá conta de responder tudo na hora no WhatsApp.
                </p>
                <p className="about-text">
                  Meu trabalho não é entregar um robô genérico, mas desenhar e acompanhar uma operação organizada, segura e compatível com a LGPD para que cada contato vire uma oportunidade real de consulta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTIMENTO / 3 PLANOS */}
        <section className="section pricing-section" id="precos">
          <div className="container">
            <div className="section-header text-center reveal">
              <p className="section-label">INVESTIMENTO &amp; PLANOS</p>
              <h2 className="section-title">
                Menos que o custo de 1 recepcionista.<br />Mais barato que perder pacientes.
              </h2>
              <p className="section-subtitle mx-auto">
                O <strong>diagnóstico inicial de 20 minutos é gratuito</strong>. Você só avança para a implantação paga após aprovar o escopo.
              </p>
            </div>

            <div className="pricing-cards-3">
              <div className="pricing-card reveal">
                <div className="pricing-card-top">
                  <div className="pricing-badge">ESSENCIAL</div>
                  <div className="pricing-value">
                    <span className="price-currency">R$</span>
                    <span className="price-amount">997</span>
                    <span className="price-period">/mês</span>
                  </div>
                  <p className="pricing-setup">+ Implantação inicial: <strong>R$ 1.497</strong> (única)</p>
                  <p className="pricing-desc">Para consultórios individuais que precisam responder rápido e organizar o WhatsApp.</p>
                </div>
                <ul className="pricing-features">
                  <li><span className="check-icon" aria-hidden="true">✓</span> Atendimento inicial 24h no WhatsApp</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Respostas administrativas aprovadas</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Registro organizado de interessados</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Encaminhamento para a recepção</li>
                </ul>
                <a
                  href={waLink("Oi, tenho interesse no plano Essencial e quero agendar o diagnóstico gratuito.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                >
                  Começar com Essencial
                </a>
              </div>

              <div className="pricing-card pricing-card--featured reveal">
                <div className="pricing-card-top">
                  <div className="pricing-badge pricing-badge--accent">COMPLETO · MAIS ESCOLHIDO</div>
                  <div className="pricing-value">
                    <span className="price-currency">R$</span>
                    <span className="price-amount">1.297</span>
                    <span className="price-period">/mês</span>
                  </div>
                  <p className="pricing-setup">+ Implantação inicial: <strong>R$ 1.997</strong> (única)</p>
                  <p className="pricing-desc">Para clínicas em crescimento que querem reduzir faltas e acompanhar o funil completo.</p>
                </div>
                <ul className="pricing-features">
                  <li><span className="check-icon" aria-hidden="true">✓</span> Tudo do plano Essencial + Instagram DM</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Confirmação e lembrete de consultas</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Integração com agenda (Google/Feegow/Clinicorp)</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Reativação de inativos + pedido de avaliação Google</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Monitoramento operacional e ajustes mensais</li>
                </ul>
                <a
                  href={waLink("Oi, tenho interesse no plano Completo e quero agendar o diagnóstico gratuito.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  Solicitar diagnóstico Completo
                </a>
              </div>

              <div className="pricing-card reveal">
                <div className="pricing-card-top">
                  <div className="pricing-badge">MULTIUNIDADE</div>
                  <div className="pricing-value">
                    <span className="price-amount" style={{ fontSize: "2.2rem" }}>Sob consulta</span>
                  </div>
                  <p className="pricing-setup">Escopo dedicado por unidade</p>
                  <p className="pricing-desc">Para redes de clínicas, múltiplas especialidades ou alto volume de atendimentos.</p>
                </div>
                <ul className="pricing-features">
                  <li><span className="check-icon" aria-hidden="true">✓</span> Roteamento por unidade ou especialidade</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Dashboard consolidado de funil</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Integrações customizadas com ERP/CRM</li>
                  <li><span className="check-icon" aria-hidden="true">✓</span> Suporte prioritário dedicado</li>
                </ul>
                <a
                  href={waLink("Oi, tenho uma clínica multiunidade e quero conversar sobre escopo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                >
                  Falar sobre Multiunidade
                </a>
              </div>
            </div>

            <div className="pricing-disclaimer reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="disclaimer-icon">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <p>
                <strong>Transparência sobre custos externos:</strong> Taxas de API oficial do WhatsApp Business (Meta) e consumo de tokens de IA são pagos diretamente pela clínica conforme o volume de uso (tipicamente entre R$ 80 e R$ 250/mês para clínicas de porte padrão), sempre apresentados antes da contratação.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section section-white" id="faq">
          <div className="container">
            <div className="section-header text-center reveal">
              <p className="section-label">PERGUNTAS FREQUENTES</p>
              <h2 className="section-title">Tire suas dúvidas</h2>
              <p className="section-subtitle mx-auto">Respostas diretas sobre rotina, integrações, LGPD e limites da tecnologia.</p>
            </div>

            <div className="faq-list">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className={`faq-item reveal ${isOpen ? "open" : ""}`}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{item.q}</span>
                      <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL COM FORMULÁRIO */}
        <section className="section cta-section" id="contato">
          <div className="container">
            <div className="cta-block reveal">
              <div className="cta-content">
                <p className="section-label">DIAGNÓSTICO GRATUITO (20 MIN)</p>
                <h2 className="cta-title">
                  Sua clínica merece um atendimento organizado para <span className="text-accent">converter mais pacientes.</span>
                </h2>
                <p className="cta-desc">
                  Preencha os dados ao lado para iniciar a conversa já com o contexto da sua clínica, ou chame direto no WhatsApp.
                </p>
                <div className="cta-actions">
                  <a
                    href={waLink("Oi, vim pelo site e quero avaliar meu atendimento.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-lg btn-wapp"
                  >
                    Chamar direto no WhatsApp
                  </a>
                </div>
              </div>

              <div className="cta-form-wrap">
                <form onSubmit={handleFormSubmit} className="qualify-form">
                  <div className="form-group">
                    <label htmlFor="lead-name">Seu nome</label>
                    <input
                      type="text"
                      id="lead-name"
                      placeholder="Ex: Dra. Mariana"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lead-clinic">Nome da clínica</label>
                    <input
                      type="text"
                      id="lead-clinic"
                      placeholder="Ex: Clínica Vida"
                      required
                      value={leadClinic}
                      onChange={(e) => setLeadClinic(e.target.value)}
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="lead-specialty">Especialidade</label>
                      <select
                        id="lead-specialty"
                        required
                        value={leadSpecialty}
                        onChange={(e) => setLeadSpecialty(e.target.value)}
                      >
                        <option value="">Selecione...</option>
                        <option value="Odontologia">Odontologia</option>
                        <option value="Estética / Dermatologia">Estética / Dermatologia</option>
                        <option value="Fisioterapia / Ortopedia">Fisioterapia / Ortopedia</option>
                        <option value="Clínica Médica / Multiespecialidade">Multiespecialidade</option>
                        <option value="Outra">Outra</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lead-volume">Mensagens/mês</label>
                      <select
                        id="lead-volume"
                        required
                        value={leadVolume}
                        onChange={(e) => setLeadVolume(e.target.value)}
                      >
                        <option value="">Selecione...</option>
                        <option value="Até 100">Até 100</option>
                        <option value="100 a 300">100 a 300</option>
                        <option value="300 a 800">300 a 800</option>
                        <option value="Acima de 800">Acima de 800</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    Enviar e agendar diagnóstico →
                  </button>
                  <p className="form-lgpd-note">Seus dados são usados apenas para este atendimento, conforme a LGPD.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: "2.5rem 1.25rem 3.5rem", maxWidth: "76rem", marginInline: "auto" }}>
          <FinalCtaBanner
            eyebrow="CONVERT IA · Saúde"
            heading="Pronto para estruturar o atendimento da sua clínica?"
            body="Agende um diagnóstico gratuito de 20 minutos para mapear onde sua equipe perde contatos hoje."
            primaryLabel="Agendar diagnóstico gratuito"
            primaryHref={waLink("Oi, vim pela página de Saúde e quero agendar meu diagnóstico gratuito de 20 minutos.")}
            secondaryLabel="Voltar para o Hub"
            secondaryHref="/"
            gradientColors={["#16a34a", "#15803d", "#052e16", "#0a0a0b"]}
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-mark">C</span>
              <span className="logo-text">CONVERT <span className="logo-ia">IA</span></span>
            </div>
            <p className="footer-tagline">Tecnologia que transforma atendimento em oportunidades.</p>
            <p className="footer-legal">© {new Date().getFullYear()} CONVERT IA. Todos os direitos reservados.</p>
          </div>
          <div className="footer-links">
            <a href="#problema">Diagnóstico</a>
            <a href="#solucao">Como Funciona</a>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#precos">Planos</a>
            <button type="button" className="footer-privacy-btn" onClick={() => setPrivacyOpen(true)}>
              Privacidade &amp; LGPD
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL PRIVACIDADE */}
      <div className={`privacy-modal ${privacyOpen ? "open" : ""}`} aria-hidden={!privacyOpen} role="dialog" aria-labelledby="privacy-title">
        <div className="privacy-modal-backdrop" onClick={() => setPrivacyOpen(false)} />
        <div className="privacy-modal-content">
          <button type="button" className="privacy-close" onClick={() => setPrivacyOpen(false)} aria-label="Fechar">✕</button>
          <h3 id="privacy-title">Política de Privacidade &amp; Conformidade LGPD</h3>
          <p>A <strong>CONVERT IA</strong> atua em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
          <ul>
            <li><strong>Finalidade:</strong> Os dados informados no formulário de diagnóstico (nome, clínica, especialidade e volume) são utilizados exclusivamente para contato comercial e avaliação operacional.</li>
            <li><strong>Dados de Pacientes:</strong> Na operação das clínicas clientes, os dados trafegam com criptografia, permanecem sob controle da clínica (Controladora) e nunca são utilizados para treinar modelos públicos de inteligência artificial.</li>
            <li><strong>Direitos do Titular:</strong> Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento pelo WhatsApp oficial.</li>
          </ul>
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href={waLink("Oi, vim pelo site e quero avaliar meu atendimento.")}
        target="_blank"
        rel="noopener noreferrer"
        className="wapp-float"
        aria-label="Conversar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
