import { React } from 'react';
import BackButton from '../components/BackButton/BackButton'

function About() {
    return (
        <div className='content'>
            <BackButton />
            <div style={{paddingTop: '20px'}}>
                <h1>UCLA CHIPS Summary</h1>
                <h3>The UCLA Center for Heterogeneous Integration and Performance Scaling</h3>
                <br />
                <p>The UCLA Center for Heterogeneous Integration and Performance Scaling (UCLA CHIPS) was established in 2015, at the Samueli School of Engineering, to address the dramatic changes taking place in the electronic hardware arena. The immense cost of semiconductor development and manufacturing, together with the saturation in cost-power-performance metrics, has led to a consolidation of semiconductor fabrication into mega foundries. Even more far-reaching is a similar consolidation in the chip-design area. Computing paradigms are evolving as systems become more data centric and heterogeneous. This calls for a fundamental re-thinking of IC and system design and manufacture.</p>
                <p>UCLA CHIPS is an interdisciplinary university-led consortium composed of industrial partners and consortia, universities and government agencies to address this problem holistically. Starting from the application space, the design environment, and the integration scheme, appropriate new materials and components are being developed. These include energy sources, memory, sensors, passives, electromechanical and medical devices – all of which need to be integrated into these new platforms and application space.</p>
                <p>UCLA CHIPS has pioneered the dielet revolution and develops new methodologies and infrastructure for integrating dielets (sometimes also called chiplets) at pitches comparable to on-chip wiring levels, enabling both latencies, bandwidth and energy per bit comparable to monolithic integration, but at the board level.&nbsp; UCLA CHIPS is also developing the enablement infrastructure including thermal, communication, test, repair and supply chain to realize this paradigm shift. We have developed integration platforms for both rigid electronics based on silicon as well as flexible platforms based on bio-compatible materials. We also apply monolithic 3D integration using wafer-to-wafer bonding for memory scaling and cognitive applications. The ability to hardware synthesize extremely large systems from prefabricated hard IP will reduce turn-around times from years to weeks and costs from tens of millions to a few hundred thousand dollars. We believe this paradigm shift will change the way systems are integrated, spur innovation and deliver new products significantly faster with an associated reduced cost.</p>
                <p>At the device level, we have pioneered the development of the Charge Trap Transistor (CTT)&nbsp; for both digital and analog embedded nonvolatile applications in advanced CMOS nodes, including in-memory compute and hardware security applications.&nbsp;</p>
                <p>We also work closely with the UCLA Geffen School of Medicine to apply these technologies to the unique but far-reaching problems in the field of medical engineering.</p>
                <p>Distinguished Professor Subramanian Iyer is founding director of UCLA CHIPS.</p>
                <p>Please contact us at&nbsp;<a href="mailto:ucla.chips@ucla.edu">ucla.chips@ucla.edu</a>&nbsp;with any inquires.</p>
            </div>
        </div>
    )
}

export default About
