import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

export const metadata = {
  title: 'Certifications | Kunal Walavalkar',
  openGraph: {
    title: 'Certifications | Kunal Walavalkar',
  },
}

const Certifications = () => {
	return (
		<>
			<Navbar
				previousPage="KUNULL"
				previousPageClassName="previousPage clickable glitch layers"
				previousPageAriaLabel="Go to KUNULL i.e. home page"
				previousPageHref="/"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				currentPage="CERTIFICATIONS"
				currentPageClassName="currentPage"
//				option2Page="experience clickable"
				option2Page="PROJECTS"
				option2PageClassname="projects clickable"
				option2PageAriaLabel="Go to my Projects page"
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>

			<main>
				<ul>
					<li>
						<Button
							button="EJPT"
							buttonClassName="ejpt primaryButton clickable pages"
							buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
							target="_blank"
							aria-label="Check out my EJPT certificate"
						/>
						<p className="description">E-LEARN SECURITY JUNIOR PENETRATION TESTER.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="CNSP"
								buttonClassName="cnsp primaryButton clickable pages"
								buttonHref="/assets/certifications/Certified-Network-Security-Practitioner.pdf"
								target="_blank"
								ariaLabel="Check out my CNSP certificate"
							/>
						</div>
						<p className="description">CERTIFIED NETWORK SECURITY PRACTITIONER.</p>
					</li>
     
{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="cc clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Certified in Cybersecurity certificate"
							/>
						</div>
						<p className="description">ISC2 Certified in Cybersecurity.</p>
					</li>
*/} 

					<li>
						<div className="capital">
							<Button
								button="ICCA"
								buttonClassName="icca primaryButton clickable pages"
								buttonHref="/assets/certifications/INE-Certified-Cloud-Associate.pdf"
								target="_blank"
								ariaLabel="Check out my ICCA certificate"
							/>
						</div>
						<p className="description">INE CERTIFIED CLOUD ASSOCIATE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="NSE 1"
								buttonClassName="nse1 primaryButton clickable pages"
								buttonHref="/assets/certifications/NSE-Certification.pdf"
								target="_blank"
								ariaLabel="Check out my NSE certificate"
							/>
						</div>
						<p className="description">NETWORK SECURITY EXPERT LEVEL 1.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="GCP"
								buttonClassName="google primaryButton clickable pages"
								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
								target="_blank"
								ariaLabel="Check out my Google Cybersecurity Professional certificate"
							/>
						</div>
						<p className="description">GOOGLE CYBERSECURITY PROFESSIONAL CERTIFICATE.</p>
					</li>

{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="pnpt clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Practical Network Penetration Tester certificate"
							/>
						</div>
						<p className="description">TCM Security Practical Network Penetration Tester certificate.</p>
					</li>
*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="security-plus clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my CompTIA Security+ certificate"
							/>
						</div>
						<p className="description">CompTIA Security+ (SY0-701) certificate.</p>
					</li>
	*/}

	      			</ul>
			</main>	
					
			<Footer/>
		</>
	);
};

export default Certifications;
