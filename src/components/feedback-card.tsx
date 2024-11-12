import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card shadow={false} className="items-start text-left" {...({} as any)}>
      <CardBody {...({} as any)}>
        <Avatar src={img} className="mb-2" alt={client} size="xl" {...({} as any)}/>
        <Typography variant="h6" color="blue-gray" {...({} as any)}>
          {client}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-normal"
          {...({} as any)}
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-6 font-normal text-gray-500"
          {...({} as any)}
        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating value={5} readonly {...({} as any)}/>
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;