'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

interface Sentence {
  sentence: string;
}

async function getSentence(): Promise<string> {
  const response = await fetch("/api/love", {
        method: "GET",
  })
  const jsonData = await response.json() as Sentence;
  return jsonData.sentence
}

const HomePage = () => {
  const [loveSentence, setLoveSentence] = useState("Ich liebe dich bis zum Mond un zuruch.")
  const [loading, setLoading] = useState(false)

  const handleRefresh = async () => {
    setLoading(true)
    try {
      const sentence = await getSentence()
      setLoveSentence(sentence)
    } catch (error) {
      console.error("Failed to fetch love sentence:", error)
      // Optionally set an error message or keep the current sentence
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-white via-pink-100 to-pink-300">
    <Card className="w-full max-w-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-lg">Do you believe in love?💕</CardTitle>
        <CardDescription className="text-center">
          Well, your girlfriend (Clelia) does - and because of you!🥺👉👈
        </CardDescription>
      </CardHeader>
      <CardContent>
       <p className="text-center">So here is a sentence to show you all her love:</p>
       <br />
       <p className="font-medium text-pink-600 italic text-center">{loveSentence}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>Want to see another love sentence? Click below!👇</p>
        <Button 
          onClick={handleRefresh} 
          className="w-full bg-gradient-to-br from-pink-300 via-red-400 to-red-600" 
          disabled={loading}
        >
          {loading ? "Loading..." : "🤍🤍🤍"}
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default HomePage