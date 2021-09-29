import { useEffect, useState } from "react";

function Marquee(props) {
    const [info, setInfo] = useState();

    async function getContent() {
        return await fetch("./content.json")
            .then(res => res.json())
            .then(data => data);
    }

    useEffect(() => {
        async function getContentSetState() {
            let data = await getContent();
            setInfo(data);
        }
        getContentSetState();
    }, []);

    if (props.curPage === "industries") {
        return (
            info ? (
                <div className="pageUI">
                    <div className="pageUIContent">
                        <div className="headline">
                            <p> {info.pages[0].blocks[0].headline}</p>
                        </div>
                        <div className="subhead">
                            <p> {info.pages[0].blocks[0].subhead}</p>
                        </div>
                    </div>
                    <footer className="cta">
                        <p><strong>{info.pages[0].blocks[0].cta}</strong></p>
                        <p>LET'S TALK. <span style={{ color: "#ffc001" }}>&#8594;</span></p>
                    </footer>
                </div>
            ) : null
        );
    } else if (props.curPage === "services") {
        return (
            info ? (
                <div className="pageUI">
                    <div className="pageUIContent">
                        <div className="headline">
                            <p> {info.pages[1].blocks[0].headline}</p>
                        </div>
                        <div className="subhead">
                            <p> {info.pages[1].blocks[0].subhead}</p>
                        </div>
                    </div>
                    <footer className="cta">
                        <p><strong>{info.pages[1].blocks[0].cta}</strong></p>
                        <p>LET'S TALK. <span style={{ color: "#ffc001" }}>&#8594;</span></p>
                    </footer>
                </div>
            ) : null
        );
    } else if (props.curPage === "aboutUs") {
        return (
            info ? (
                <div className="pageUI">
                    <div className="pageUIContent">
                        <div className="headline">
                            <p> {info.pages[2].blocks[0].headline}</p>
                        </div>
                        <div className="subhead">
                            <p> {info.pages[2].blocks[0].subhead}</p>
                        </div>
                    </div>
                    <footer className="cta">
                        <p><strong>{info.pages[2].blocks[0].cta}</strong></p>
                        <p>LET'S TALK. <span style={{ color: "#ffc001" }}>&#8594;</span></p>
                    </footer>
                </div>
            ) : null
        );
    }
}

export default Marquee;