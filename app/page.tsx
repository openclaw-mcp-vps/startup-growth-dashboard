export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "Which tools does it connect to?",
      a: "Google Analytics, Stripe, Mixpanel, and more via their official APIs — all in one unified view."
    },
    {
      q: "Is my data secure?",
      a: "Yes. All API keys are stored encrypted server-side and data is fetched via secure server-side rendering."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, no lock-in. Cancel your subscription at any time from your billing portal."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Early-Stage Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track all startup metrics<br />in one view
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect Google Analytics, Stripe, Mixpanel and more. Get a unified dashboard showing revenue, user growth, and engagement — without switching tabs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $49/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Metrics preview strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { label: "MRR", value: "$12,400", delta: "+18%" },
          { label: "Active Users", value: "3,821", delta: "+9%" },
          { label: "Churn Rate", value: "2.1%", delta: "-0.4%" }
        ].map((m) => (
          <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <p className="text-[#8b949e] text-xs uppercase tracking-wider mb-1">{m.label}</p>
            <p className="text-white text-2xl font-bold">{m.value}</p>
            <p className="text-[#3fb950] text-sm mt-1">{m.delta}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Growth Plan</p>
          <p className="text-white text-5xl font-bold mb-1">$49</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited integrations",
              "Real-time metric sync",
              "Customizable widgets",
              "Server-side secure fetching",
              "Email digest reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
