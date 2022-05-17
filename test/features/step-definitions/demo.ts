import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai"

Given(/^Google page is opened$/, async function(){
    console.log(`Before opening browser...`);
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log(`After opening browser...`);
})

When(/Search with (.*)/, async function(SearchItem){
    console.log(`>> SearchItem: ${SearchItem}`);
    let ele = $(`[name=q]`)
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    ele.click()
    await browser.pause(2000)
})

Then(/^URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>> expectedURL: ${ExpectedURL}` );
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})

