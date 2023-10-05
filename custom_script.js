(function() {
    'use strict';

    // Define an array of objects, each containing XPath and the new value
    const elementsToChange = [
        { xpath: '/html/body/div[1]/div[3]/div/div/div/div[2]/div/div/div/main/div/div/section/div/div[3]/div/div/div/article/div[1]/div[3]/span/span/span[1]', newValue: 'Friday, September 29th, 2023 at 07:38' },
        { xpath: '/html/body/div[1]/div[3]/div/div/div/div[2]/div/div/div/main/div/div/section/div/div[3]/div/div/div/article/div[1]/div[1]/div/span[3]/span[1]', newValue: 'Sep 29, 2023' },
        { xpath: '/html/body/div[1]/div[3]/div/div/div/div[2]/div/div/div/main/div/div/section/div/div[3]/div/div/div/article/div[1]/div[1]/div/span[3]/span[2]', newValue: 'Friday, September 29th, 2023 at 07:38' },
        { xpath: '/html/body/div[1]/div[3]/div/div/div/div[2]/div/div/div/main/div/div/section/div/div[3]/div/div/div/article/div[1]/div[3]/span/span/span[2]', newValue: 'Friday, September 29th, 2023 at 07:38' },
    ];

    // Function to change text at the specified XPath
    function changeTextAtXPath(xpath, newValue) {
        const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) {
            element.textContent = newValue;
        }
    }

    // Function to run the script after the page has loaded
    function runScriptAfterPageLoad() {
        elementsToChange.forEach(elementInfo => {
            changeTextAtXPath(elementInfo.xpath, elementInfo.newValue);
        });
    }

    // Run the script after the page has fully loaded
    document.addEventListener('DOMContentLoaded', runScriptAfterPageLoad);
})();
