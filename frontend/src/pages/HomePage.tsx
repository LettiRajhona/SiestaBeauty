import { Link } from 'react-router-dom'
import ServiceIcon from '../components/ServiceIcon'
import { categoryCards } from '../data/serviceCatalog'
import felirat from '../assets/felirat.png'

function HomePage() {
  return (
    <main className="content">
      <div className="section" id="room">
        <div className="room-title">
          <strong>SIESTA BEAUTY</strong>
          <span>- KOZMETIKA -</span>
          <span>A szépség, ami belőled fakad</span>
          <Link className="appointment-button" to="/idopontfoglalas">
            IDŐPONTFOGLALÁS
          </Link>
        </div>
      </div>

      <div className="section" id="thalgo">
        <div className="thalgo-copy">
          <h2>THALGO</h2>
          <h3>A Tenger ereje a bőr szépségéért</h3>
          <p>
            A THALGO francia professzionális tengeri <br />
            kozmetikumokat használom, melyek a tenger <br /> ásványi anyagaival
            és hatóanyagaival segítik <br /> bőröd természetes szépségének
            megőrzését.
          </p>
          <Link className="thalgo-button" to="/thalgo">
            TÖBB A THALGÓRÓL
          </Link>
        </div>
        <img
          className="thalgo-coral"
          src="/thalgo-korall.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <section className="section" id="services">
        <h2>KEZELÉSEK</h2>
        <div className="service-grid">
          {categoryCards.map((service) => (
            <article className="service-card" key={service.key}>
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/kezelesek">TOVÁBB</Link>
            </article>
          ))}
        </div>
      </section>

      <div className="section" id="rolam">
        <div className="about-copy">
          <h2>RÓLAM</h2>
          <span className="about-signature">
            <img src={felirat} alt="Siesta Beauty" />
          </span>
          <p>
            Számomra a kozmetika több, mint egy kezelés – <br /> egy énidő, ahol
            test és lélek harmóniába kerül. <br /> Célom, hogy kihozzam belőled a
            természetes
            <br /> ragyogásodat a THALGO tengeri hatóanyagaival <br />
            és személyre szabott kezelésekkel.
          </p>
          <Link className="thalgo-button" to="/rolam">
            TÖBB RÓLAM
          </Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage
