import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "The Future of Cloud Computing",
    description: "Exploring emerging trends and technologies in cloud services",
    date: "2023-07-15",
    slug: "future-of-cloud-computing",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    description: "Essential tips to protect your business from cyber threats",
    date: "2023-07-10",
    slug: "cybersecurity-best-practices",
  },
  {
    title: "Optimizing Your SaaS Stack",
    description: "Strategies to streamline your software services for maximum efficiency",
    date: "2023-07-05",
    slug: "optimizing-saas-stack",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          View all posts
        </Link>
      </div>
    </section>
  )
}

