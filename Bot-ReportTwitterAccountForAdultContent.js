'use strict';

/* MIT License
 * 
 * Copyright (c) 2021 gh0$t
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. */


(function () {
    document.querySelector('[data-testid="userActions"]').click();
    setTimeout(function () {
        document.querySelectorAll('span.css-16my406').forEach(function (v, i, a) {
            if (v.textContent.split(' ').includes('Report')) {
                v.click();
            }
        });
    }, 0);
    setTimeout(function () {
        var iframe = document.querySelector('iframe');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        innerDoc.querySelector('button[value="SensitiveMediaOption"]').click();
    }, 1500);
    setTimeout(function () {
        var iframe = document.querySelector('iframe');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        innerDoc.querySelector('button[value="AdultOption"]').click();
    }, 3500);
    setTimeout(function () {
        var iframe = document.querySelector('iframe');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        innerDoc.querySelector('button[class="submit-btn"]').click();
    }, 4500);
})();
