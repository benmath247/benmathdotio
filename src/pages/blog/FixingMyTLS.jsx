import BlogContainer from '../../components/blog/BlogContainer';

export default function FixingMyTLS() {
    return (
        <BlogContainer
            title="Fixing My TLS"
            date="August 11, 2026"
            photo={null}
        >
            <p>
                As I sit here writing this blog post, I have not yet solved this problem. My website is down.
                The site had some hosting transitions earlier this year that aren't work explaining. But the result was that after some time my site went from HTTPS to http.
                That's not good! The SSL/TLS certificate expired and I didn't notice until I tried to visit my site on a different computer.
                It's a terrible user experience to show up to a site and get a warning from Google Chrome. I have to fix this! But first, I will do some studying. Here is what I know so far.
            </p>

            <h3>What is TLS?</h3>
            <p>
                TLS stands for Transport Layer Security. It's a protocol that ensures secure communication over a computer network.
                It encrypts the data sent between a client (like a web browser) and a server (like my website), making it difficult for anyone to intercept or tamper with the information.
                TLS is essential for protecting sensitive data, such as passwords and credit card numbers, during transmission. A TLS certificate is a digital certificate that authenticates the identity of a website and enables the TLS encrypted connection.
            </p>
            <p>My professor at Drexel put it in a way that I think is pretty easy to understand. We all have driver's licenses issued from different states.
                We are able to go to different states and identify ourselves because we have IDs that authorities know how to recognize and verify because of a shared set of rules.
                TLS certificates are like those IDs for websites. They are issued by trusted authorities (Certificate Authorities) and allow browsers to verify that a website is who it claims to be.
            </p>
            <h3>What is SSL?</h3>
            <p>
                SSL stands for Secure Sockets Layer. It's the predecessor to TLS and was the first protocol designed to secure communications over a network.
                SSL is a depricated version of TLS but is still commonly referred to in the context of secure web connections. For the sake of conversation about modern web tools, SSL and TLS are interchangeable terms.
            </p>
            <h3>What's up with my website?</h3>
            <p>
                The truth is, I don't know. DNS records have never been my strength. I have always relied on the help of others to configure websites and figure this kind of thing out.
                Now that I am approaching the end of my time at Drexel and a more intermediate stage of my career, I need to learn how to do this myself.
            </p>
            <h4>What happened?</h4>
            <p>I have a React site running on a domain hosted by namecheap.com.
                It was configured but it seems the TLS records expired or something because it no longer indicates encrypted connection.
                I tried to fix it and now I am sure it is completed messed up. The site won't come up at all.
                I am not sure what to do next. I have a few ideas, but I need to do some research first.
            </p>
            <h4>What do I need to do?</h4>
            <p>
                I need to figure out how to renew the TLS certificate for my domain. This usually involves generating a new certificate signing request (CSR) and submitting it to a Certificate Authority (CA).
                Once the CA verifies my identity, they will issue a new TLS certificate that I can install on my server.
                After that, I need to update my DNS records to point to the new certificate and ensure that my website is accessible over HTTPS again.
            </p>
            <p>I'll keep you updated on my progress. If you're reading this, my site has been successfully updated!</p>


        </BlogContainer>
    );
}
