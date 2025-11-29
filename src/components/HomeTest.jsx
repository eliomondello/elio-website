import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const HomeTest = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Section 1 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 1 - Hero</h2>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 2 - About</h2>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 3 - Services</h2>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 4 - Portfolio</h2>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 5 - Timeline</h2>
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 6 - News</h2>
        </div>
      </section>

      {/* Section 7 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center">Section 7 - Books</h2>
        </div>
      </section>

      {/* Section 8 */}
      <section className="py-32 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center">Section 8 - CTA</h2>
        </div>
      </section>
    </div>
  )
}

export default HomeTest
