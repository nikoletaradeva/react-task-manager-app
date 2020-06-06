import React from "react";
import "./Footer.css";

export function Footer() {
	return (
		<div className="footer styles-footer" >
			<div className="info">
				<section>
					<p><img className="img-logo styles-img" src="https://image.flaticon.com/icons/png/512/1632/1632670.png" alt="img-logo"/>
						Join the millions of people who organize life and work with Tasksdoist.
					</p>
				</section>
                <section>
					<p>Copyright &copy; 2020 Tasks manager</p>
				</section>

                <section>
					<p>Follow us:
                        <a href="/"><img className="styles-img-social" src="https://image.flaticon.com/icons/svg/733/733549.svg" alt=""/></a>
                        <a href="/"><img className="styles-img-social" src="https://image.flaticon.com/icons/svg/733/733558.svg" alt=""/></a>
                        <a href="/"><img className="styles-img-social" src="https://image.flaticon.com/icons/svg/733/733590.svg" alt=""/></a>
                    </p>
				</section>
			</div>
		</div>
	);
}
