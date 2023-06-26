import logo from '../assets/nurture_svg_logo.svg'
import backgroundOne from '../assets/nurture_bgr_one.jpg';
import { RxDoubleArrowDown } from 'react-icons/rx'
import nourishing1 from '../assets/food_four.jpg'
import nourishing2 from '../assets/food_one.jpg'
import nourishing3 from '../assets/food_three.jpg'
import nourishing4 from '../assets/food_two.jpg'
import potential1 from '../assets/earth_two_green_sky.jpg'
import potential2 from '../assets/earth_one_greener.jpg'
import potential3 from '../assets/earth_four_plant.jpg'
import potential4 from '../assets/earth_five_plant.jpg'
import charity1 from '../assets/charity_one.jpeg'
import charity2 from '../assets/charity_two.jpg'
import charity3 from '../assets/plant_one.jpg'
import potential5 from '../assets/planting_one.jpg'
import potential6 from '../assets/planting_three.jpg'
import others1 from '../assets/others_three_bg.jpg'
import others2 from '../assets/cleaning_two.jpg'
import others3 from '../assets/others_one.jpg'
import others4 from '../assets/cleaning_one.jpg'
import education1 from '../assets/education_one.jpg'
import education2 from '../assets/education_two.jpg'
import education3 from '../assets/education_three.jpg'
import education4 from '../assets/education_four.jpg'
import covid2 from '../assets/covid_two.jpg'
import covid3 from '../assets/covid_three.jpg'
import join1 from '../assets/join_two.jpg'
import join2 from '../assets/donation_one.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export const companyInfo = {
    name: "NurtureReach",
    subName: "Charity Foundation",
    logo: logo,
    motto: `" Empowering communities through compassion and care; Welcome to NurtureReach. 
             Together, we can make a difference in the lives of those in need "`,
    bgrImg: backgroundOne,
    icon: <RxDoubleArrowDown className='arrow-move' />,
}

export const missionContent = {
    title: "One Act of Compassion at a Time",
    content: `NurtureReach, a beacon of compassion and dedication, is committed to empowering communities and 
                  transforming lives. With a focus on shelter, cleanliness, and environmental sustainability, 
                  we strive to provide a safe haven for those in need, rid communities of dirt and pollution, 
                  and actively contribute to the removal of plastic waste from our planet. Through our relentless efforts, 
                  we aim to create a better world where every 
                  individual can thrive and find hope. Together, let's nurture change and make a lasting impact.`,
};

export const articleContent = [
    {
        id: "0",
        title: "Our Impact",
        subtitle: `Through our dedicated efforts and collaborative initiatives, we have been able to create meaningful impact in various 
                   areas. From education and healthcare to sustainable development and social empowerment, we strive to leave a 
                   lasting and positive imprint on the world.`
    },

    {
        id: "1",
        title: "Nourishing Lives",
        title2: "Feeding Hope: Making a Difference",
        subtitle: "The Importance of Giving Food to Individuals in Need",
        img1: nourishing1,
        img2: nourishing2,
        img3: nourishing3,
        quote: `"Food is not just nourishment for the body; it is also nourishment for the soul. 
                 When we give food to those in need, we are not just feeding their hunger, 
                 but also providing them with hope, compassion, and the belief that they matter." - Joe Robert`,
        paragraph1: `In a world plagued by hunger and poverty, the act of giving food to individuals in need holds tremendous 
                     significance. Beyond meeting basic nutritional requirements, it offers hope, compassion, 
                     and a sense of dignity to the vulnerable members of our society.`,
        paragraph2: `Food insecurity can have devastating consequences, hindering physical and mental well-being while perpetuating 
                     a cycle of poverty. By extending a helping hand and addressing this fundamental need, we contribute 
                     to breaking that cycle. We bring comfort to empty stomachs and instill a belief that they are valued and cared for.`,
        paragraph3: `Moreover, giving food to individuals in need strengthens the fabric of our communities. It fosters empathy, 
                     kindness, and solidarity among individuals from diverse backgrounds. 
                     It reminds us of our shared humanity and the responsibility we have to uplift one another.`,
        paragraph4: `One powerful example of the impact of giving food to individuals in need can be seen in the response to 
                     Hurricane Katrina in 2005. The hurricane caused widespread devastation in New Orleans and the Gulf Coast, 
                     leaving thousands of families displaced and struggling to find their next meal. In the face of this crisis, 
                     numerous organizations, volunteers, and government agencies mobilized to provide emergency food assistance. 
                     Their efforts ensured that families had access to nutritious meals during an incredibly challenging time, 
                     offering both sustenance and hope.`,
        paragraph5: `When we provide nourishment to those in need, we offer more than sustenance for their bodies. 
                     We provide them with the energy and resources to pursue their dreams, develop their skills, and 
                     contribute meaningfully to society.By investing in their well-being, 
                     we invest in a brighter future for our communities as a whole.`,
        paragraph6: `Through food assistance programs, community initiatives, and partnerships, 
                     we can make a tangible difference in the lives of individuals facing food insecurity. By supporting 
                     organizations and projects that focus on sustainable solutions and 
                     long-term empowerment, we create pathways for individuals to break free from the cycle of hunger and poverty.`,
        paragraph7: `At NurtureReach, our charity organization is committed to alleviating hunger and promoting food security. 
                     We work tirelessly to ensure that everyone has access to nutritious meals and the support they need. 
                     Through partnerships with local communities, food banks, and organizations, we distribute food 
                     to those in need and implement sustainable solutions for long-term impact. Additionally, 
                     we prioritize education and empowerment, equipping individuals with the knowledge and resources 
                     to secure their own food sources and break the cycle of poverty. Join us in our mission to 
                     nourish communities and create a world where no one goes hungry. 
                     Together, we can make a difference one meal at a time.`,
        paragraph8: `In essence, the act of giving food to individuals in need matters because it has the power to transform lives. 
                     It offers nourishment, restores dignity, and creates a more compassionate society. 
                     Let us recognize the importance of this noble endeavor and strive to make a difference, one meal at a time.`,
    },

    {
        id: "2",
        title: "Unlocking Potential",
        title2: "The Transformative Power of Education",
        subtitle: "Why it matters",
        img1: education2,
        img2: education3,
        img3: education4,
        quote: `"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela`,
        paragraph1: `Education plays a pivotal role in shaping individuals, communities, and societies.
                    It equips people with knowledge, skills, and opportunities to realize their full potential 
                    and contribute meaningfully to the world.  By investing in education, we can unlock doors of 
                    opportunity and create a brighter future for all.`,
        paragraph2: `One notable example of the transformative power of education occurred in Ghana, West Africa. 
                    The Free Senior High School (SHS) policy, implemented by the Ghanaian government, 
                    aimed to provide free secondary education for all eligible students. 
                    This initiative significantly increased access to education, particularly for disadvantaged 
                    students who previously faced financial barriers. It opened doors for thousands of young 
                    individuals, enabling them to pursue their educational aspirations, 
                    acquire valuable skills, and improve their chances of success in various fields.`,
        paragraph3: `Education not only empowers individuals but also fuels economic growth and social 
                    development. It fosters innovation, critical thinking, and problem-solving abilities, 
                    which are vital for addressing global challenges. Moreover, education promotes 
                    social cohesion, tolerance, and understanding 
                    by nurturing empathy and respect for diverse cultures and perspectives.`,
        paragraph4: `To harness the potential of education, it is crucial to ensure equal access 
                    and quality education for all. Governments, in collaboration with international 
                    organizations and stakeholders, must prioritize education funding, teacher training, and the 
                    development of inclusive learning environments. Investing in education is an investment 
                    in the future, as educated individuals become agents of positive change, 
                    contributing to the advancement of their communities and societies at large.`,
        paragraph5: `Furthermore, it is essential to recognize the importance of lifelong 
                    learning and the need for continuous skill development in an ever-evolving world. 
                    Embracing technology and digital platforms can enhance access to education and enable remote 
                    learning opportunities, bridging gaps and reaching marginalized populations.`,
        paragraph6: `At NurtureReach, our charity organization is dedicated to providing access to quality education for all. 
                     We believe that education is a fundamental right that empowers individuals, transforms communities, 
                     and creates a brighter future. Through our initiatives, we strive to bridge the educational gap, 
                     particularly in underserved areas. We support schools, provide scholarships, and offer resources and 
                     tools to enhance learning opportunities. Our mission is to empower individuals through education, 
                     equipping them with the knowledge and skills to thrive and contribute to society. Join us in our 
                     commitment to building a world where every person has the 
                     opportunity to receive a quality education and unlock their full potential.`,
        paragraph7: `In conclusion, education is a powerful catalyst for personal growth, 
                     social progress, and sustainable development. The Free Senior High School policy 
                     in Ghana exemplifies the impact of providing equal educational opportunities. 
                     Let us prioritize education as a fundamental right and strive for inclusive, 
                     equitable, and quality education systems worldwide. By investing in education 
                     today, we pave the way for a brighter, 
                     more prosperous future for individuals, communities, and our global society.`,
    },

    {
        id: "3",
        title: "The Power of Tree Planting",
        title2: " For Climate Action",
        subtitle: "The Environmental Impact of Tree Planting",
        img1: potential1,
        img2: potential2,
        img3: potential3,
        quote: `"Someone's sitting in the shade today because someone planted a tree a long time ago." - Warren Buffett`,
        paragraph1: `Tree planting is an impactful and essential practice that can help mitigate climate change, restore 
                     ecosystems, and create a sustainable future for our planet. By recognizing the significance of trees 
                     and taking action to plant and protect them, we can make a positive difference for generations to come.`,
        paragraph2: `One remarkable example of successful tree planting efforts took place in Pakistan. The Billion 
                     Tree Tsunami project, initiated in the Khyber Pakhtunkhwa province, aimed to combat deforestation,
                     restore degraded land, and mitigate the effects of climate change. Through a collaborative effort
                     involving government agencies, local communities, and international organizations, the project
                     successfully planted and nurtured over one billion trees within five years. This massive 
                     reforestation initiative not only revived forests but also created employment
                     opportunities, improved air and water quality, and increased biodiversity in the region.`,
        paragraph3: `The benefits of tree planting extend far beyond environmental restoration. 
                     Trees play a crucial role in mitigating climate change by sequestering carbon dioxide, 
                     reducing the greenhouse effect, and combating soil erosion. They provide shade, cool urban 
                     areas, and contribute to cleaner air by absorbing pollutants. Trees also offer habitat and food for wildlife, 
                     enhance biodiversity, and create green spaces that promote mental and physical well-being.`,
        paragraph4: `To participate in tree planting efforts, individuals and communities can get involved in local 
                     initiatives, volunteer for reforestation projects, or support organizations dedicated to 
                     environmental conservation. Governments can play a crucial role by implementing policies
                     that protect existing forests, encourage afforestation, and promote sustainable land management practices.`,
        paragraph5: `Tree planting is not just about planting trees; it is about fostering a mindset of environmental 
                     stewardship and sustainability. By valuing and protecting our natural resources, 
                     we can secure a healthier and more resilient future for ourselves and future generations.`,
        paragraph6: `At NurtureReach, our charity organization is dedicated to promoting tree planting initiatives for a greener future. 
                     We collaborate with communities and organizations to drive reforestation efforts, raise awareness, 
                     and restore degraded ecosystems. Through strategic partnerships and educational programs, we empower 
                     individuals to make a positive impact and foster a sustainable mindset. Together, we can create a world 
                     where trees thrive, biodiversity flourishes, and future generations can enjoy a healthier planet. Join us in our 
                     mission to nurture the Earth and make a lasting difference through the power of tree planting.`,
        paragraph7: `In conclusion, tree planting holds immense potential to address environmental 
                     challenges and create a more sustainable world. The Billion Tree Tsunami project in Pakistan 
                     serves as an inspiring example of how concerted efforts can lead to significant positive change. 
                     Let us recognize the power of trees, take action to plant and protect them, and collectively 
                     contribute to revitalizing the Earth. 
                     Together, we can make a lasting impact and preserve the beauty and integrity of our planet for years to come.`,
    },

    {
        id: "4",
        title: "Empowering Change",
        title2: " Making a Difference through Charitable Initiatives",
        subtitle: "Shelter for All:",
        subtitle2: "Clean Communities:",
        subtitle3: "Combatting Plastic Pollution:",
        img1: others1,
        img2: others2,
        img3: others3,
        quote: `"Someone's sitting in the shade today because someone planted a tree a long time ago." - Warren Buffett`,
        paragraph1: `In today's world, numerous charities are working tirelessly to address critical social and environmental 
                     issues. From providing shelter and cleanliness to combating plastic pollution, these organizations play a 
                     vital role in creating positive change. Among them, NurtureReach stands out as a catalyst for transformation 
                     and progress. With a steadfast commitment to improving lives and the 
                     planet, NurtureReach takes active steps to address various pressing challenges.`,
        paragraph2: `NurtureReach recognizes the importance of a safe and secure home. Through collaborations with local 
                     communities and housing programs, we provide shelter to those facing homelessness or inadequate living conditions. 
                     Our initiatives aim to offer a foundation for 
                     stability, fostering a sense of dignity and hope for individuals and families in need.`,
        paragraph3: `NurtureReach understands the impact of cleanliness on public health and overall well-being. We organize community 
                     cleanup campaigns, engaging volunteers to rid neighborhoods of dirt, waste, and pollution. 
                     By promoting cleanliness, we strive to create healthier and more livable communities, 
                     ensuring a better quality of life for all.`,
        paragraph4: `NurtureReach is dedicated to combatting the pressing issue of plastic pollution. Through awareness campaigns, 
                     recycling initiatives, and education programs, we aim to reduce plastic consumption and promote 
                     sustainable alternatives. By partnering with local businesses, communities, 
                     and governments, we work towards eliminating plastic waste and restoring the health of our environment.`,
        paragraph5: `One remarkable example of NurtureReach's work is the partnership with a coastal town in Asia. 
                     The organization implemented a comprehensive program to remove plastic waste from local beaches and 
                     surrounding areas. By engaging local residents, schools, and businesses, NurtureReach successfully collected 
                     and recycled thousands of kilograms of plastic, transforming the environment and raising awareness about the 
                     importance of responsible waste management.`,
        paragraph6: `At NurtureReach, our charity organization is dedicated to promoting tree planting initiatives for a greener future. 
                     We collaborate with communities and organizations to drive reforestation efforts, raise awareness, 
                     and restore degraded ecosystems. Through strategic partnerships and educational programs, we empower 
                     individuals to make a positive impact and foster a sustainable mindset. Together, we can create a world 
                     where trees thrive, biodiversity flourishes, and future generations can enjoy a healthier planet. Join us in our 
                     mission to nurture the Earth and make a lasting difference through the power of tree planting.`,
        paragraph7: `Charitable organizations like NurtureReach are at the forefront of tackling pressing social and environmental 
                     issues. Through initiatives focused on providing shelter, promoting cleanliness, 
                     and combatting plastic pollution, NurtureReach is making a tangible difference in the lives of individuals 
                     and communities. By working collaboratively and inspiring change, we can create a better future for all, 
                     one step at a time. Join NurtureReach in its mission to empower change and contribute to a more sustainable 
                     and compassionate world.`,
    },
]

export const whatWeDoContent = [
    {
        id: "0",
        title: "What we do",
        subtitle: `At NurtureReach, we are passionate about making a positive difference in the lives of others. We focus on providing 
                   support and resources to underserved communities, empowering individuals to reach their full potential.`
    },

    {
        id: "1",
        title: "Mission & Purpose",
        img: nourishing3,
        content: `Our mission at NurtureReach is to empower underserved communities by providing access to education, healthcare, and 
                  sustainable development opportunities. Through our purpose-driven initiatives, we strive to create a positive and 
                  lasting impact on individuals and communities, fostering a brighter and more equitable future.`,
    },

    {
        id: "2",
        title: "Community Program Development & Implementation",
        img: education1,
        content: `At NurtureReach, we specialize in community program development and implementation. By working closely with local 
                  stakeholders and leveraging our expertise, we design and execute tailored programs that address the unique 
                  needs of communities. Our aim is to create sustainable solutions that promote social, economic, and educational 
                  advancement, empowering individuals and fostering community growth.`,
    },

    {
        id: "3",
        title: "Advocacy & Awareness",
        img: potential4,
        content: `Advocacy and awareness are at the core of our work at NurtureReach. We strive to raise public consciousness about 
                  important social issues and advocate for positive change. Through campaigns, education, and collaboration, 
                  we aim to empower individuals, engage communities, and drive systemic transformation. Together, we can create a 
                  more inclusive and equitable society.`,
    },

    {
        id: "4",
        title: "Support, Fundraising & Donor Engagement",
        img: join2,
        content: `At NurtureReach, we believe in the power of support, fundraising, and donor engagement. By fostering strong relationships
                  with our donors and supporters, we are able to amplify our impact and provide vital resources to those in need. 
                  Together, we can make a difference and create lasting change in the lives of individuals and communities we serve.`,
    },
]

export const impactContent = [
    {
        id: "1",
        title: "20",
        subtitle: "Years",
        content: `Number of years since our charity organization was founded, dedicated to 
                  making a difference in the lives of those in need`,

    },

    {
        id: "2",
        title: "5000+",
        subtitle: "People reached",
        content: `Number of individuals our charity organization has reached 
                  through our programs and services, making a positive impact on their lives`

    },

    {
        id: "3",
        title: "100+",
        subtitle: "Communities supported",
        content: `Number of communities our charity organization has supported through various 
                  initiatives, improving lives and fostering development`
    },

    {
        id: "4",
        title: "10+",
        subtitle: "Scholarship",
        content: "Number of scholarships awarded by our charity organization to support education and empower deserving students"
    },

    {
        id: "5",
        title: "20+",
        subtitle: "School projects",
        content: `Transforming education through funding more than 10 impactful school projects for student success.`
    },

    {
        id: "6",
        title: "15",
        subtitle: "Donations to hospitals",
        content: `By supporting hospitals, we've contributed more than 15 state-of-the-art equipment, 
                  and the enhancement of healthcare facilities.`
    },

    {
        id: "7",
        title: "1000+",
        subtitle: "Greener Future",
        content: `Number of trees our charity organization has planted to date, contributing to 
                  environmental conservation and reforestation efforts`
    },

    {
        id: "8",
        title: "10",
        subtitle: "Grantees",
        content: `Number of grantees in food, education, and 
                  community initiatives the NurtureReach is proud to have supported in the last 3 years`
    },

    {
        id: "9",
        title: "10+",
        subtitle: "Countries reached",
        content: "Number of countries NurtureReach has impacted through its projects and initiatives"
    },
]

export const commentContent = [
    {
        id: "1",
        name: "Darlene Wood",
        status: "Scholarship Recipient",
        img1: education3,
        img2: education4,
        content: `"NurtureReach's empowering scholarships are commendable. I'm immensely grateful for the opportunity to pursue my 
                   dreams with their support. With confidence, I'll excel academically and make a positive impact."`,
    },
    {
        id: "2",
        name: "Bertha Clyde",
        img1: others4,
        img2: others2,
        content: `"NurtureReach's support in community cleaning, sanitation, and food provision has transformed Gunnison, CO. 
                   Grateful for their dedication to improving lives."`,
    },
    {
        id: "3",
        name: "David Hanks",
        status: "Clopton Resident",
        img1: covid2,
        img2: nourishing4,
        content: `"Grateful for the unwavering support of NurtureReach during the COVID-19 crisis in Clopton, AL. Their generosity 
                    provided food, shelter, and unity, bringing hope and relief to our community."`,
    },
    {
        id: "4",
        name: "Ricardo Evans",
        status: " Community Elder",
        img1: potential4,
        img2: potential5,
        content: `"Inspired by NurtureReach's unwavering dedication, we extend our deepest gratitude for their transformative 
                  reforestation efforts in Duchity, Haiti. Through their partnership, our community witness a flourishing 
                  landscape and a brighter future."`,
    },

]

export const socialMediaContent = {
    iconFacebook: <FaFacebookF />,
    iconTwitter: <FaTwitter />,
    iconInstaram: <FaInstagram />
}