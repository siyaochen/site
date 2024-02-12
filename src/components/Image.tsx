const Image = ({
    path,
    subtitle,
}: {
    path: string;
    subtitle: string;
}) => {
    return (
        <div className="h-full w-full flex flex-col items-center gap-4">
            <img className="h-full w-full object-scale-down" src={path} />
            <p className="text-neutral-500">{subtitle}</p>
        </div>
    )
}

export default Image