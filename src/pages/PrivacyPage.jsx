import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy - Very Wild Jacks";
  }, []);

  return (
    <div className="page-container content-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Introduction</h2>
      <p>Welcome to Very Wild Jacks. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
      
      <h2>2. Data We Collect</h2>
      <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
      <ul>
        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
        <li><strong>Usage Data</strong> includes information about how you use our website and games.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
      <ul>
        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
      </ul>

      <h2>4. Advertising (Google AdSense)</h2>
      <p>We use Google AdSense to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Ads Settings.</p>
      
      <h2>5. Contact Details</h2>
      <p>If you have any questions about this privacy policy or our privacy practices, please contact us at support@verywildjacks.com.</p>
    </div>
  );
}
