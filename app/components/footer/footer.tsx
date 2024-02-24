import "@/app/components/footer/footer.css"

export default function Footer(){
    return(
        <main>
            <div className="footer">
                <div className="footer-left"><h1><a href="/">Voltran</a></h1></div>
                <div className="footer-right"><h1><a href="https://github.com/aquilarda/"><i>GitHub</i></a></h1></div>
            </div>
        </main>
    );
}