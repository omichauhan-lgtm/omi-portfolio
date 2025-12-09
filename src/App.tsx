import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
    return (
        <Layout>
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Navbar />
        </Layout>
    )
}

export default App
