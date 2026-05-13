export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "ai-photography-playbook",
    title: "The AI Product Photography Playbook for Conversion-First Brands",
    excerpt: "How we generate studio-grade visual systems without studio bottlenecks.",
    tag: "AI Photography",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "chatbot-revenue-loops",
    title: "Designing WhatsApp Revenue Loops with Conversational Intelligence",
    excerpt: "Conversation architecture patterns that turn messages into measurable sales.",
    tag: "Chatbots",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "creative-velocity-ai-video",
    title: "Creative Velocity: Building AI Video Ad Systems That Scale",
    excerpt: "From hooks to variants: a repeatable framework for endless high-performing ads.",
    tag: "Video Ads",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  },
];
