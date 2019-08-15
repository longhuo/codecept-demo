
Feature('login logout');

Scenario('login', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.amOnPage('https://github.com/login')
    I.see('Sign in to GitHub');
    I.fillField('login', 'lh.goodspeed@gmail.com');
    I.fillField('password', 'xxxxx');
    I.click('Sign in');
    I.see('GoodSpeed-HL');
});



Scenario('logout', (I) => {
    I.amOnPage('https://github.com');
    I.executeScript(() =>{ document.querySelectorAll('.Header-item:last-child img')[0].click()});
    I.see('Sign out')
    I.click({css: '.dropdown-signout'})
    I.see('GitHub');
});