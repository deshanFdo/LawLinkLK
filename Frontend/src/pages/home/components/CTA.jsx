import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc] to-blue-800" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Journey?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Join LawLinkLK today and experience a better way to connect with legal professionals or grow your practice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0066cc] btn-primary hover:bg-blue-50 group">
              Register as Client
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 btn-secondary hover:text-white group">
              Register as Lawyer
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

