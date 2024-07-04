import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div id="main" className='h-screen w-[85%] mx-auto flex items-center justify-between flex-wrap content-center gap-5'>
   <Card bg="#f0f0f0" heading="Instant Server Start" icon="💡" text="On demand file serving over native ESM, no bundling required!"/>
   <Card bg="#f0f0f0" heading="Lightning Fast HMR" icon="⚡️" text="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
   <Card bg="#f0f0f0" heading="Rich Features" icon="🛠️" text="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
   <Card bg="#f0f0f0" heading="Optimized Build" icon="📦" text="Pre-configured Rollup build with multi-page and library mode support."/>
   <Card bg="#f0f0f0" heading="Universal Plugins" icon="🔩" text="Rollup-superset plugin interface shared between dev and build."/>
   <Card bg="#f0f0f0" heading="Fully Typed APIs" icon="🔑" text="Flexible programmatic APIs with full TypeScript typing."/>
</div>
  )
}

export default App