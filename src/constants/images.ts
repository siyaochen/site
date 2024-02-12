const PATH_TO_IMAGES = 'src/assets/img/'

type Image = {
    name: string;
    subtitle: string;
}

const IMAGE_DATA: Image[] = [
    {
        name: '1.jpg',
        subtitle: 'January 2024, New York',
    }
]

export const IMAGES = IMAGE_DATA.map(({name, subtitle}) => {
    return {
        path: PATH_TO_IMAGES + name,
        subtitle,
    }
});
