import React from 'react'

function SectionTitle({children, id}) {
  return (
    <h1 id={id && id} className="text-3xl font-bold mb-5 text-orange-700 dark:text-orange-400 underline
    decoration-yellow-500 decoration-[0.25rem]
    motion-safe:transition-all motion-safe:duration-200
    hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-yellow-500/50 focus:decoration-yellow-500/50">{children}</h1>
  )
}

export default SectionTitle