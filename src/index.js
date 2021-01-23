import askQuestions from "./questions";

export async function cli ()
{
    const options = await askQuestions();
    console.log(options);
}
