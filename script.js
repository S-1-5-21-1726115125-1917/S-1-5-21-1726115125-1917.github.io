document.addEventListener("DOMContentLoaded", ()=>{
    let New=document.createElement("script")
    /*等效于:
    <script src="https://giscus.app/client.js"
        data-repo="S-1-5-21-1726115125-1917/S-1-5-21-1726115125-1917.github.io"
        data-repo-id="R_kgDOPDx95A"
        data-category="Announcements"
        data-category-id="DIC_kwDOPDx95M4CsM2U"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
    </script>
    */
    New.src="https://giscus.app/client.js"
    New.setAttribute("data-repo","S-1-5-21-1726115125-1917/S-1-5-21-1726115125-1917.github.io")
    New.setAttribute("data-repo-id","R_kgDOPDx95A")
    New.setAttribute("data-category","Announcements")
    New.setAttribute("data-category-id","DIC_kwDOPDx95M4CsM2U")
    
    
    New.setAttribute("data-mapping","pathname")
    New.setAttribute("data-strict","0")
    New.setAttribute("data-reactions-enabled","1")
    New.setAttribute("data-emit-metadata","0")
    New.setAttribute("data-input-position","top")
    New.setAttribute("data-theme","light")
    New.setAttribute("data-lang","zh-CN")
    New.setAttribute("data-loading","lazy")
    New.setAttribute("crossorigin","anonymous")
    New.async=true
    document.body.appendChild(New)
});