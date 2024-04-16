import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <div className={'flex-col justify-center text-center flex mt-12 pt-12'}>
                <Image src="/profilePic.webp" width={100} height={100} className={"rounded-full mx-auto my-4"}></Image>
                <h1 className={"text-center"}>Grace Wijaya</h1>
                <p className={`border-black border rounded-2xl w-48 text-center my-4 mx-auto`}>Available for work</p>
                <ul className={"list-none flex gap-8 text-center text-slate-600 mx-auto"}>
                    <li>Product Designer</li>
                    <li>Singapore</li>
                    <li>10:35</li>
                    <li>Email</li>
                    <li>Website</li>
                </ul>
            </div>
            <div className={"flex-row flex mt-12 justify-center"}>
                <div className={"w-20 text-right pr-16 font-bold"}>About</div>
                <div className={"w-1/2 pl-16"}>
                    I am Grace Wijaya, a dedicated Product Designer residing in the vibrant city of Singapore. My
                    <span className={"bg-yellow-300"}> passion lies in the intersection of art and technology</span>,
                    where I weave together <span className={"bg-yellow-300"}>compelling user
                    experiences</span> through thoughtful design.
                    <br/><br/>
                    I hold a Bachelor of Design in Interaction Design from the esteemed National University of
                    Singapore, graduating in May 2017. This academic foundation has equipped me with a <span
                    className={"bg-yellow-300"}>solid
                    understanding of the principles that underpin effective interaction design</span>, providing me with
                    the knowledge to create designs that <span className={"bg-yellow-300"}>seamlessly blend aesthetics and functionality.</span>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center"}>
                <div className={"w-20 text-right pr-16 font-bold"}>Projects</div>
                <div className={"w-1/2 pl-16 flex flex-row"}>
                    <div className={"flex-col border-slate-400 border rounded-md ml-16"}><Image
                        src="/hoomie.webp" width={320} height={180} className={"pb-2.5 rounded-md"}></Image><b
                        className={"pl-2.5"}>Hoomie</b><p
                        className={"text-slate-500  pl-2.5"}>SmartHome App design</p></div>
                    <div className={"flex-col border-slate-400 border rounded-md ml-16"}><Image
                        src="/emurye.webp" width={320} height={180} className={"pb-2.5 rounded-md"}></Image><b
                        className={"pl-2.5"}>Emurze</b><p
                        className={"text-slate-500 pb-2.5 pl-2.5"}>Encommerce Dashboard</p></div>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}>Projects</div>
                <div className={"w-1/2 pl-5 ml-10 border-slate-400 border rounded-md bg-white py-2"}>
                    <p><b>Product Designer</b></p>
                    <p>Creation Tech, Singapore</p>
                    <p>June 2022 - Present</p><br/>
                    <ul className={"list-disc ml-5"}>
                        <li>Participated in agile development processes, ensuring timely delivery of design assets.</li>
                        <br/>
                        <li>Conducted user research and translated findings into design improvements.</li>
                        <br/>
                        <li>Collaborated with cross-functional teams to create and implement innovative design
                            solutions.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}></div>
                <div className={"w-1/2 pl-5 ml-10 border-slate-400 border rounded-md bg-white py-2"}>
                    <p><b>UX/UI Designer</b></p>
                    <p>Creative Agency, Sydney</p>
                    <p>November 2020 - May 2022</p><br/>
                    <ul className={"list-disc ml-5"}>
                        <li>Worked closely with clients to understand project requirements and goals.</li>
                        <br/>
                        <li>Created wireframes, prototypes, and high-fidelity designs for web and mobile applications.
                        </li>
                        <br/>
                        <li>Conducted usability testing to validate design decisions.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}></div>
                <div className={"w-1/2 pl-5 ml-10 border-slate-400 border rounded-md bg-white py-2"}>
                    <p><b>Graphic Designer</b></p>
                    <p>Yellow Shine, Jakarta</p>
                    <p>August 2018 - Mar 2020</p><br/>
                    <ul className={"list-disc ml-5"}>
                        <li>Collaborated with a diverse team of creatives to develop visually stunning graphics for
                            clients across various industries.
                        </li>
                        <br/>
                        <li>Designed marketing collateral, including brochures, social media posts, and promotional
                            materials, resulting in a 15% increase in client engagement.
                        </li>
                        <br/>
                        <li>Executed branding initiatives, ensuring brand consistency across all visual elements.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}>Education</div>
                <div className={"w-1/2 pl-5 ml-10 border-slate-400 border rounded-md bg-white py-2"}>
                    <p><b>Bachelor of Design in Interaction Design</b></p>
                    <p>National University of Singapore</p>
                    <p>Sept 2017 - August 2021</p><br/>
                    <ul>
                        <li>1st winner in a university hackathon during my academic journey, showcasing my prowess in
                            innovative problem-solving and collaborative design in 2019
                        </li>
                        <br/>
                    </ul>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}>Skills</div>
                <div className={"w-1/2 pl-5 ml-10 py-2"}>
                    <ul className={"list-disc ml-5"}>
                        <li><b>UI Design</b></li>
                        <p>Mastery in creating visually appealing and intuitive user interfaces.</p><br/>
                        <li><b>Interaction Design</b></li>
                        <p>Expertise in crafting seamless and engaging user experiences.</p><br/>
                        <li><b>Prototyping</b></li>
                        <p>Skilled in rapid prototyping to visualize and test design concepts.</p><br/>
                        <li><b>User Research</b></li>
                        <p>Experience in conducting insightful user research to inform design decisions.</p><br/>
                        <li><b>Project Management</b></li>
                        <p>Effective organization and management of design projects from concept to execution.</p>
                    </ul>
                </div>
            </div>
            <div className={"flex-row flex mt-12 justify-center ml-8 "}>
                <div className={"w-20 text-right pr-16 mr-4 font-bold"}>Contact</div>
                <div className={"w-1/2 pl-5 ml-10py-2"}>
                    <p><b>Email: </b>hello@gracewijaya.com</p>
                    <p><b>Phone: </b>+65 8123 4567</p>
                    <p><b>Linkedin: </b>gracewijaya</p>
                    <p><b>Social Media: </b>
                    </p>
                </div>
            </div>
            <div className={"mt-12 flex justify-center bg-white py-10"}>
                <div className={"w-1/3"}>
                    <p>Remix this template for FREE</p>
                    <p>Built in <b>framer</b></p>
                    <p>Made with love by <b>Bie Lab</b></p>
                </div>
            </div>

            <div
                className={"bg-white border-slate-400 border rounded-md w-36 pl-1 flex fixed bottom-14 right-4 shadow-md"}>
                Unlock Pro for $9
            </div>
            <div
                className={"bg-white border-slate-400 border rounded-md w-32 flex fixed pl-1 bottom-4 right-4 shadow-md"}>
                Made in framer
            </div>
        </div>
    );
}