import { Accordion } from 'react-bootstrap';
import BlogContainer from '../../components/blog/BlogContainer';

export function OverhaulingMyWebsite() {
    return (
        <BlogContainer
            title="Overhauling My Website"
            date="August 8, 2025"
            photo={null}
        >
            <p>My website was looking <em>bad</em>. I had been gradually working on bits and pieces of different projects for about three years that made the styling and design unmanageable. The result was not a good representation of who I am as a developer today. It was time to overhaul.</p>
            <p>Since I initially created my site, I took a class at Drexel University about Software Design Patterns. It was an eye opener to help me realize exactly how I can improve my code and organize my website. I learned a few key principles of how to write code that left me disturbed with the state of things in the old portfolio site. </p>
            <h3>The Principles</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Clean Code</Accordion.Header>
                    <Accordion.Body>
                        This principle emphasizes writing code that is easy to read and maintain. In my old site, I had many components that were cluttered and hard to follow. The new site focuses on clarity, using meaningful names and consistent formatting. This one really stuck with me.
                        My professor emphasized that clean code should have tiny little functions and small files. Every task should be its own function, proper naming conventions, and consistent formatting. This makes the codebase easier to navigate and understand, which is crucial for long-term maintenance.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>DRY (Don't Repeat Yourself)</Accordion.Header>
                    <Accordion.Body>
                        This principle emphasizes the importance of reducing duplication in code. In my old site, I had many components that were similar but not identical, leading to a lot of repeated code. The new site uses reusable components to avoid this.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Single Responsibility</Accordion.Header>
                    <Accordion.Body>
                        Each component should have one reason to change. In the old site, some components handled multiple responsibilities, making them harder to maintain. The new site separates concerns more effectively, ensuring that each component has a clear purpose.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p className='py-4'>There was one more but it is relevant to Java, not Python or JS.</p>
            <p>
                The new site is going to get rid of <em>a lot</em> of dead code. I removed all of the styles and am rebuilding them. The new design is not going to be too much of a deviation from Bootstrap, but it'll still have a personal spin. I am stripping away everything that wasn't looking good before. I will slowly re-add it back in. But for now, the process is going to leave my site pretty bare. Sorry about that.
            </p>
            <h3>The Blog</h3>
            <p>
                One thing that I am excited for about the new site is the way I am doing my blog section. In the last iteration of the blog I had a frontend calling a back end to get the HTML response and display it. It demonstrates that I know how to make a full stack application, but it skips the awesomeness of React. By this time, I'd hope that anyone reading this would agree that I know how to make a simple django/react application. I am going to switch to making blogs in React with in-site components, not HTML served in an API. The blogs will look better, but for now I have about a dozen HTML blog files that I need to convert to React. I also have to rebuild the blog display. The list page was looking a bit cluttered and I want to make it more visually appealing.
            </p>
            <p>
                I was concerned that the blogs wouldn't all look uniform, so I made a cool Blog Container. It will ensure that all blogs have a title, date, optional photo, and all look similar in their heading. This component goes around whatever I want the blog to be.
            </p>
            <h3>The Projects</h3>
            <p>I have a number of old projects that need an update, and others that can be tossed in the garbage. The ones that I am keeping are my Pokedex app, the Roth IRA simulator, and maybe my Hello World Unity app.</p>
            <p>Everything else can be thrown in the trash. I know React very well, but I don't think my old projects showcase my abilities in the best way. I also know a lot of other technologies, but haven't worked with them on this site. I need to make some new stuff to start showing what I can do.</p>
            <h3>Contact Form</h3>
            <p>Honestly, I forget whether my old contact form worked or not. I know at one time it worked because I made a blog post about it, but I am not sure what its current status is. I figured it's worth rebuilding for the completeness of the transformation.</p>

            <p className="py-4">For now, I have my homepage up with some well-made components, and a couple of blogs. I like how it looks. A new problem also popped up: I am not sure why, but the TLS certificate on my site did not auto-renew. I need to update that, but I am not sure how. I really hate working with DNS records, but this will be good practice.</p>
            <p>Between work, school, volunteering to teach code, planning a wedding, and making this website, I have my plate full. Gotta get to work, so I'm off to the races!</p>
        </BlogContainer>
    );
}

export default OverhaulingMyWebsite;