export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="bg-background rounded-3xl center max-w-sm p-4">
      {"success" in message && (
        <div className="center flex-col items-start">
          <h3 className="text-green-500 text-xl">Success</h3>
          <p className="opacity-80">{message.success}</p>
        </div>
      )}

      {"error" in message && (
        <div className="center flex-col items-start">
          <h3 className="text-red-500 text-xl">Error</h3>
          <p className="opacity-80">{message.error}</p>
        </div>
      )}

      {"message" in message && (
        <div className="center flex-col items-start">
          <h3 className="text-xl">Message</h3>
          <p>{message.message}</p>
        </div>
      )}
    </div>
  );
}
