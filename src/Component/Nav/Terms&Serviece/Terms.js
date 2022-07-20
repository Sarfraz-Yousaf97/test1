import { AppBar, Typography } from '@material-ui/core'
import React, { useRef } from 'react'
import './Terms.css'
import logo from '../../Static/dmvi_white.png'

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
export default function Terms() {
  const headerRef = useRef(null);
  // const servicesRef = useRef(null);
  const privacyRef = useRef(null);
  const operationsRef = useRef(null);
  const usingServicesRef = useRef(null);
  return (
    <div>
      <nav className='nav'>
        {/* <img className='.navImage' src={logo} alt="" /> */}
        <img className='logo' src={logo} alt="" />
        <Typography className='navTitle' variant='h4'>Terms Of Serviece</Typography>
      </nav>
      <div className="content">
          <div className="buttonrow">
            <ul>
            <button onClick={() => {scrollTo(headerRef.current);}} className='headerLink'>1. Who May Use Serviece</button>
            <button onClick={() => {scrollTo(privacyRef.current);}} className='headerLink'>2. Privacy</button>
            <button onClick={() => {scrollTo(operationsRef.current);}} className='headerLink'>3. Content On the Services</button>
            <button onClick={() => {scrollTo(usingServicesRef.current);}} className='headerLink'> 4. Using the Services</button>
            </ul>
          </div>
        <div>
          <div className='section1' id="Serviece" ref={headerRef}>
            <h1 className="heading">1. Who May Use the Services</h1>
            <p className="paragraph">
              You may use the Services only if you agree to form a binding
              contract and are not a person barred from receiving
              services under the laws of the applicable jurisdiction. In any
              case, you must be at least 13 years old, or in the case of
              Periscope 16 years old, to use the Services. If you are accepting
              these Terms and using the Services on behalf of a company,
              organization, government, or other legal entity, you represent and
              warrant that you are authorized to do so and have the authority to
              bind such entity to these Terms, in which case the words “you” and
              “your” as used in these Terms shall refer to such entity.
            </p>
          </div>
          <div className='section1' id="Privacy" ref={privacyRef}>
            <h1 className="heading">2. Privacy</h1>
            <p className="paragraph">
              Our Privacy Policy describes how we handle the information you provide
              to us when you use our Services. You understand that through your use of
              the Services you consent to the collection and use (as set forth in the
              Privacy Policy) of this information, including the transfer of this
              information to the United States, Ireland, and/or other countries for
              storage, processing and use by its affiliates.
            </p>
          </div>
          <div className='section1' id="Content" ref={operationsRef} >
            <h1 className="heading">3. Content on the Services</h1>
            <p className="paragraph">
              You are responsible for your use of the Services and for any
              Content you provide, including compliance with applicable laws,
              rules, and regulations. You should only provide Content that you
              are comfortable sharing with others. Any use or reliance on any
              Content or materials posted via the Services or obtained by you
              through the Services is at your own risk. We do not endorse,
              support, represent or guarantee the completeness, truthfulness,
              accuracy, or reliability of any Content or communications posted
              via the Services or endorse any opinions expressed via the
              Services. You understand that by using the Services, you may be
              exposed to Content that might be offensive, harmful, inaccurate or
              otherwise inappropriate, or in some cases, postings that have been
              mislabeled or are otherwise deceptive. All Content is the sole
              responsibility of the person who originated such Content. We may
              not monitor or control the Content posted via the Services and, we
              cannot take responsibility for such Content.
            </p>
          </div>
          <div className='section1' id="Using" ref={usingServicesRef}>
            <h1 className="heading">4. Using the Services</h1>
            <p className="paragraph">
              Our Services evolve constantly. As such, the Services may change
              from time to time, at our discretion. We may stop (permanently or
              temporarily) providing the Services or any features within the
              Services to you or to users generally. We also retain the right to
              create limits on use and storage at our sole discretion at any
              time. We may also remove or refuse to distribute any Content on
              the Services, limit distribution or visibility of any Content on
              the service, suspend or terminate users, and reclaim usernames
              without liability to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
