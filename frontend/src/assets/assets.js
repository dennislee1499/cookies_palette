import nails from './nails.jpeg'
import nails2 from './nails2.jpeg'
import nail_logo from './nail_logo.jpeg'
import nail_tech_1 from './nail_tech_1.jpeg'
import nail_tech_2 from './nail_tech_2.jpeg'

export const assets = {
    nail_tech_1,
    nail_tech_2,
    nail_logo,
    nails,
    nails2
}

export const nail_techs = [
    {
        _id: 'nail_tech_1',
        name: 'Lalala',
        image: nail_tech_1,
        specialty: 'Design',
        experience: '5 years',
        about: 'Lalala has a strong commitment to delivering best service!',
        deposit_fee: 35,
        address: {
            line1: '123 main st',
            line2: 'NYC'
        }
    },
    {
        _id: 'nail_tech_2',
        name: 'Hahaha',
        image: nail_tech_2,
        specialty: 'Gel refills',
        experience: '2 years',
        about: 'Hahaha is dedicated to perfecting her craft.',
        deposit_fee: 15,
        address: {
            line1: '123 main st',
            line2: 'NYC'
        }
    }
]