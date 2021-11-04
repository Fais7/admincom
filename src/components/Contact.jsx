import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div id="content" >
                        <h1> Contact me </h1>
                        <form role="form">
                            <div class="form-group">
                                <label for="username" class="iconic user" > Name <span class="required">*</span></label>
                                <input type="text" class="form-control" name="username" id="username" required="required" placeholder="Hi friend, how may I call you ?" />
                            </div>
                            <div class="form-group">
                                <label for="usermail" class="iconic mail-alt"> E-mail address <span class="required">*</span></label>
                                <input type="email" class="form-control" name="usermail" id="usermail" placeholder="I promise I hate spam as much as you do" required="required" />
                            </div>
                            <div class="form-group">
                                <label for="subject" class="iconic quote-alt"> Subject </label>
                                <input type="text" class="form-control" name="subject" id="subject" required="required" placeholder="What would you like to talk about?" />
                            </div>
                            <div class="form-group">
                                <label for="message" class="iconic comment"> Message </label>
                                <textarea name="message" id="message" class="form-control" rows="3" placeholder="Don't be shy, live me a friendly message and I'll answer as soon as possible" required="required"></textarea>
                            </div>
                            <input type="submit" value=" ★  Send the mail !" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;
