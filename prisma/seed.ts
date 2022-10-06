//sample events

import { prisma } from "../src/database.js";

async function main() {
    await prisma.event.createMany({
      data: [
        {
          nanoid: "VTXlm20t",
          title: "Event",
          host: "Me",
          dateTime: "Today",
          location: "My house",
          description: "Cool event"
        },
        {
          nanoid: "BYip30Lk",
          title: "Event 2",
          host: "You",
          dateTime: "Tomorrow",
          location: "Your house",
          description: "Cooler event"
        }
      ],
      skipDuplicates: true,
    });
  }

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
