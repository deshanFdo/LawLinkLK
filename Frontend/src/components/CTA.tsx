export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#004999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Legal Journey?</h2>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Join thousands of satisfied users who have found the perfect legal match through LawLinkLK
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button className="px-8 py-4 bg-white text-[#0066cc] rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Register as Client
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300">
              Register as Lawyer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

