
import { Card, Image, Link, Text } from '@geist-ui/core';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
function LabsPage() {
    const nav = useNavigate();
    const list = [
        {
            name: "Stronghold: Caverns of Sorcery",
            img: "https://www.choiceofgames.com/wp-content/uploads/2025/01/web408.png",
            des: "Deep beneath the earth, the dragon is rising! Quest into ancient caverns, learn magical lore, and draw strength from friends and family to save your home!",
            link: "https://www.choiceofgames.com/stronghold-2/"
        },
        {
            name: "Restore, Reflect, Retry",
            img: "https://www.choiceofgames.com/wp-content/uploads/2024/06/web408-1.png",
            des: "You’ve played this game before. It’s a haunted game about a haunted game. You may not remember, but the game remembers you. I remember you.",
            link: "https://www.choiceofgames.com/restore-reflect-retry/"
        },
        {
            name: "New Witch in Town",
            img: "https://www.choiceofgames.com/wp-content/uploads/2023/01/promo408-1.png",
            des: "Make friends, cast spells, and uncover secrets in your magical small town! Will you preserve the forest or let the town grow? and some changes",
            link: "https://www.choiceofgames.com/new-witch-in-town/"
        }

    ]
    return (
        <div className='p-2'>
            <button className=' border rounded-md  p-3' onClick={() => nav('/')}>
                <IoIosArrowBack />
            </button>
            <Text h1 bold style={{ fontSize: "20px", fontWeight: "600" }} className=' mt-3'>Qiziqarli Loyihalar</Text>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {list.map((item, index) => (
                    <Card width="400px" key={index + 1}>
                        <Image src={item.img}
                            width="400px" draggable={false} />
                        <Text className=' font-medium' h4 mb={0}>{item.name}</Text>
                        <Text type="secondary" small>{item.des}</Text>
                        <Card.Footer>
                            <Link block target="_blank" href={item.link}>Qo'shimcha ma'lumot</Link>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div >
    )
}
export default LabsPage;