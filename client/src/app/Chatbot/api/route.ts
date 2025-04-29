import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const botResponsePromise = new Promise<string>((resolve, reject) => {
      const command = `python app.py "${text.replace(/"/g, '\\"')}"`;

      exec(
        command,
        {
          shell: 'cmd.exe',
          timeout: 300000,
          maxBuffer: 1024 * 1024 * 10,
          env: {
            ...process.env, // inherit parent env
            PYTHONIOENCODING: "utf-8", // 🔥 Force stdout UTF-8
          },
        },
        (error, stdout, stderr) => {
          if (stdout && stdout.trim()) {
            resolve(stdout.trim());
          } else {
            console.error("Execution Error:", error);
            console.error("Stderr:", stderr);
            reject(new Error("No output from bot."));
          }
        }
      );
    });

    const botResponse = await botResponsePromise;
    return NextResponse.json({ botResponse });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to get bot response" }, { status: 500 });
  }
}
