import { CheckCircle } from "lucide-react"

export default function LifeTrackCaseStudy() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        {/* Title */}
        <h1 className="text-4xl font-bold">
          LifeTrack – Real-Time Health Monitoring System
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          An AI-powered health monitoring platform that integrates wearable
          sensor data, machine learning–based chronic risk prediction, and
          mental health support to enable proactive healthcare.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Machine Learning",
            "IoT",
            "Flutter",
            "ESP32",
            "Python",
            "Google Fit",
            "Health Analytics",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-border" />

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Many chronic conditions such as cardiovascular disease,
            hypertension, and hypoxia require continuous monitoring.
            Existing healthcare systems often rely on periodic checkups,
            delayed diagnostics, and manual intervention, which limits
            early detection and preventive care.
          </p>
        </section>

        {/* Solution */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Proposed Solution</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            LifeTrack provides a real-time health monitoring system that
            continuously collects physiological data from wearable devices,
            analyzes risk patterns using machine learning models, and
            delivers actionable insights through a mobile application.
          </p>
        </section>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">System Architecture</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Wearable sensors collect heart rate, SpO₂, and motion data.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              ESP32 microcontroller transmits data via Bluetooth/Wi-Fi.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Google Fit integration enables standardized health data access.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Backend ML models analyze trends and predict chronic risk levels.
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Flutter mobile app visualizes insights and alerts users.
            </li>
          </ul>
        </section>

        {/* ML Component */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Machine Learning & Analytics
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Machine learning models were trained on publicly available
            cardiovascular and physiological datasets to identify abnormal
            patterns related to arrhythmia, hypoxia, and hypertension.
            Feature engineering focused on heart rate variability, oxygen
            saturation trends, and activity levels.
          </p>
        </section>

        {/* Key Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• Real-time health data visualization</li>
            <li>• Chronic disease risk prediction</li>
            <li>• Mental health support chatbot</li>
            <li>• Emergency alerts for abnormal readings</li>
            <li>• Secure user authentication and profiles</li>
          </ul>
        </section>

        {/* Outcome */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Outcome & Impact</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            LifeTrack demonstrates how AI and IoT can be combined to build
            scalable, preventive healthcare solutions. The system reduces
            dependency on manual monitoring, enables early risk detection,
            and improves user awareness of long-term health conditions.
          </p>
        </section>

        {/* Future Scope */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Future Enhancements</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• Integration with BLE medical-grade sensors</li>
            <li>• Doctor and caregiver dashboards</li>
            <li>• Advanced deep learning–based anomaly detection</li>
            <li>• Cloud-based health data analytics</li>
          </ul>
        </section>

      </div>
    </section>
  )
}
