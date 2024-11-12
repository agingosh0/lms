import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card className="border" {...({} as any)}>
      <CardHeader className="h-64" {...({} as any)}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody {...({} as any)}>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
            {...({} as any)}
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case" {...({} as any)}>
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" {...({} as any)}>
          {desc}
        </Typography>
        <Button variant="outlined" {...({} as any)}>{label}</Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;