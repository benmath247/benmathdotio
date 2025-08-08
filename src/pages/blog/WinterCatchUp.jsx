import BlogContainer from '../../components/blog/BlogContainer';

export default function WinterCatchUp() {
    return (
        <BlogContainer
            title="Winter Catch Up"
            date="February 2025"
            photo={null}
        >
            <p>It’s been a while since my last blog update—205 days, to be exact. A lot has happened in that time, both professionally and personally. I started classes at Drexel University, began teaching at the Cherry Hill Public Library, got engaged, and even added a new member to the family—our dog! Before I dive into fixing this website, I wanted to post a quick update. There are quite a few bugs to address, and some of my older projects are no longer active.</p>
            <h2>Fall and Winter at Drexel</h2>
            <p>Two quarters down. Last quarter, I took Systems Basics and a Python course. Systems Basics was particularly challenging—it covered advanced concepts in C programming, Linux, process management, pipes, I/O redirection, and file descriptors. Our projects included building a Linux-based chatroom and developing a shell with increasing functionality each week. I was pleased to finish with an A, though I found that many students struggled to keep up. It was an introductory course with no prerequisites, yet from the very first week, it assumed knowledge that I had only acquired through years of industry experience. I'm glad to have that one behind me.</p>
            <p>My second course, Python, was a breeze. I earned an A+ without much effort, largely because the coursework relied on an online tool that provided instant feedback and allowed unlimited retries for full credit. Since I use Python daily, most of the material was already familiar, though I did pick up a few new tricks and tools. This semester, I’m taking Software Design Patterns and Data Structures & Algorithms.</p>
            <p>So far, I’m really enjoying these courses. In Software Design Patterns, we’ve been working with UML diagrams and exploring patterns like Singleton, Wrapper, Factory, and Strategy. I’ve already applied some of these concepts at work to improve my code. My Data Structures & Algorithms course has covered familiar ground from my undergraduate studies, but this time, it's all in C. We just wrapped up Linked Lists, and I’m gearing up for midterms.</p>
            <h2>Teaching at the Library</h2>
            <p>I reached out to my childhood library to see if I could teach a Python class, and they said yes! Every Sunday, I’ve been teaching Python to teens at the Cherry Hill Public Library. I designed the curriculum myself, covering the fundamental concepts of the language. The students are bright, and the experience has deepened my appreciation for the teachers who taught me. One student is particularly interested in game development, which reminded me of a Unity class I once taught. I’d love to replicate that experience, though a challenge remains—we’re not allowed to install new software on the library computers. I’m working on a workaround.</p>
            <h2>Personal Life</h2>
            <p>Life outside of school has been exciting. Getting engaged has been an incredibly special experience, and we also welcomed our dog, Shlomo! He’s generally a great pup and is about to graduate from his obedience training class next week. Between my fiancée working on her MBA at Villanova, me at Drexel, and Shlomo in training at PetSmart, we’re a hardworking family!</p>
            <h2>Revamping This Website</h2>
            <p>Recently, I applied for a position at Perpay—a role that seemed like a perfect fit for my skills and experience. When I didn’t even land an interview, I started questioning how I was presenting myself online. After reviewing this website, I realized it was filled with outdated and buggy projects. Only a few of my past projects still make me proud, and the UI itself has issues. It’s time for an upgrade. I’m making a list of improvements and will cross them off as I complete them.</p>
            <ul>
                <li>Implement loading feature for pages with pictures</li>
                <li>Remove dated/not working portfolio items</li>
                <li>Restyle cards</li>
                <li>Chess with Redis/Elastic Cache</li>
                <li>Separate my own components and styles into an npm package</li>
            </ul>
        </BlogContainer>
    );
}