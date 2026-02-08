import { CheckCircle } from "lucide-react"

export default function Talk2ERPCaseStudy() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Talk2ERP – Voice-Controlled ERP System
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          A voice-enabled ERP automation system that allows users to perform
          business operations such as material requests and purchase orders
          using natural language commands.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Voice AI",
            "ERPNext",
            "Python",
            "NLP",
            "Automation",
            "REST APIs",
          ].map((tech) => (
            <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="my-12 h-px bg-border" />

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ERP systems are powerful but often complex, requiring manual data
            entry and multiple steps for simple operations. This leads to
            inefficiency, training overhead, and human errors.
          </p>
        </section>

        {/* Solution */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Proposed Solution</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Talk2ERP introduces a voice-based interface that enables users to
            interact with ERPNext using natural speech, significantly reducing
            manual effort and improving workflow efficiency.
          </p>
        </section>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">System Architecture</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {[
              "User issues voice commands via microphone",
              "Speech-to-text conversion using NLP pipeline",
              "Intent recognition and rule-based parsing",
              "ERPNext REST APIs handle business operations",
              "System responds with voice/text feedback",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Core Logic */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Core Intelligence</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The system uses rule-based NLP combined with intent mapping to
            convert voice commands into structured ERP actions such as
            creating purchase orders, fetching records, and tracking requests.
          </p>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• Voice-based ERP interaction</li>
            <li>• Automated purchase order creation</li>
            <li>• Approval workflow integration</li>
            <li>• Reduced manual ERP navigation</li>
          </ul>
        </section>

        {/* Outcome */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Outcome & Impact</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Talk2ERP significantly improves usability of ERP systems by
            reducing operational friction and enabling faster task execution.
          </p>
        </section>

        {/* Future */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Future Enhancements</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• LLM-based intent understanding</li>
            <li>• Multi-language voice support</li>
            <li>• Analytics dashboard for ERP usage</li>
          </ul>
        </section>

      </div>
    </section>
  )
}
