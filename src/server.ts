import 'module-alias/register';
import { apolloServer } from "@/presentation";

apolloServer.listen(5039).then(({ url }: { url: string }) => console.log(`Apollo server is running on ${url}`))
