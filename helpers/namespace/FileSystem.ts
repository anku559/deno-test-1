export async function readDirectory(dirPath: string) {
  try {
    const realPath = await Deno.realPath(dirPath);
    const dirContent = [];

    for await (const dirEntry of Deno.readDir(realPath)) {
      dirContent.push(dirEntry.name);
    }
    return dirContent;
  } catch (err) {
    return err.message;
  }
}
