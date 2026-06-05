const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const hostPage = await browser.newPage();
    const clientPage = await browser.newPage();

    console.log("Navigating host...");
    await hostPage.goto('http://localhost:5174/');
    
    // Type name to reveal the create game button
    await hostPage.waitForSelector('#player-name');
    await hostPage.type('#player-name', 'HostPlayer');
    
    // Wait for the button and click "Create Multiplayer Game"
    await hostPage.waitForSelector('#create-game-btn', { visible: true });
    await hostPage.click('#create-game-btn');
    
    // Wait for the invite URL to be generated
    await hostPage.waitForSelector('#invite-url', { visible: true });
    const inviteUrl = await hostPage.$eval('#invite-url', el => el.value);
    console.log("Host created room. Invite URL:", inviteUrl);

    // Monitor console errors on both pages
    hostPage.on('console', msg => console.log('HOST CONSOLE:', msg.text()));
    clientPage.on('console', msg => console.log('CLIENT CONSOLE:', msg.text()));

    console.log("Navigating client to:", inviteUrl);
    await clientPage.goto(inviteUrl);
    
    // Check client status
    await clientPage.waitForSelector('#setup-status');
    let clientStatus = await clientPage.$eval('#setup-status', el => el.innerText);
    console.log("Client initial status:", clientStatus);

    // Wait a bit to see if connection succeeds or fails
    await new Promise(r => setTimeout(r, 6000));
    
    clientStatus = await clientPage.$eval('#setup-status', el => el.innerText);
    console.log("Client final status (after 6s):", clientStatus);

    await browser.close();
})();
