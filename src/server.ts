import 'module-alias/register';
import { apolloServer } from "@/presentation";

const PORT = 5039;
apolloServer.listen(PORT).then(({ url }: { url: string }) => console.log(`Apollo server is running on ${url}`))
