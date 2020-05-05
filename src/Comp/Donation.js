import React from "react";

export class Donation extends React.Component {
    render() {
        return (
            <section id="one">
				<div class="inner">
					<header>
                        <center>
                        {/* <img src={cp} /> */}
                        </center>
                        <br></br>
						<h2>Donation</h2>
					    </header><br></br>
                        <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
                        <script>paypal.Buttons().render('body');</script>
				</div>
			</section>
        )
    }
}

export default Donation;