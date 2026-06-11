import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions - Very Wild Jacks";
  }, []);

  return (
    <div className="page-container content-page">
      <h1>Terms & Conditions</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and playing Very Wild Jacks, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
      
      <h2>2. Use of the Site</h2>
      <p>You agree to use the site only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our site.</p>
      
      <h2>3. Intellectual Property</h2>
      <p>The content, layout, design, data, databases and graphics on this website are protected by United States and other international intellectual property laws and are owned by Very Wild Jacks. Unless expressly permitted in writing, you may not copy, distribute, or create derivative works.</p>

      <h2>4. Disclaimer of Warranties</h2>
      <p>This website is provided "as is" without any representations or warranties, express or implied. Very Wild Jacks makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>

      <h2>5. Limitation of Liability</h2>
      <p>Very Wild Jacks will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any direct, indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill.</p>

      <h2>6. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Your continued use of the site after any such changes constitutes your acceptance of the new terms.</p>
    </div>
  );
}
