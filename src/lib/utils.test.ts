import { describe, it, expect } from "vitest"
import { cn } from "./utils"

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("px-4", "py-2")
    expect(result).toBe("px-4 py-2")
  })

  it("handles conditional classes", () => {
    const isActive = true
    const result = cn("base-class", isActive && "active-class")
    expect(result).toBe("base-class active-class")
  })

  it("filters out falsy values", () => {
    const result = cn("base", false && "hidden", null, undefined, "visible")
    expect(result).toBe("base visible")
  })

  it("merges Tailwind classes correctly (deduplicates)", () => {
    const result = cn("px-4 py-2", "px-8")
    expect(result).toBe("py-2 px-8") // px-8 should override px-4
  })

  it("handles empty input", () => {
    const result = cn()
    expect(result).toBe("")
  })

  it("combines multiple class strings", () => {
    const result = cn("base-class", "text-lg", "p-4")
    expect(result).toBe("base-class text-lg p-4")
  })

  it("deduplicates conflicting Tailwind classes", () => {
    // Later classes should override earlier ones with tailwind-merge
    const result = cn("text-sm text-base", "text-lg")
    expect(result).toBe("text-lg")
  })

  it("handles complex conditional logic", () => {
    const isLarge = true
    const isPrimary = false
    const result = cn(
      "base-class",
      isLarge && "text-lg font-bold",
      isPrimary && "bg-primary",
      "p-4"
    )
    expect(result).toContain("base-class")
    expect(result).toContain("text-lg")
    expect(result).toContain("font-bold")
    expect(result).toContain("p-4")
    expect(result).not.toContain("bg-primary")
  })

  it("handles spacing classes correctly", () => {
    // tailwind-merge should keep the last spacing class
    const result = cn("p-2", "p-4")
    expect(result).toBe("p-4")
  })

  it("preserves non-conflicting classes", () => {
    const result = cn("bg-blue-500", "text-white", "p-4", "rounded-lg")
    expect(result).toBe("bg-blue-500 text-white p-4 rounded-lg")
  })

  it("handles undefined and null gracefully", () => {
    const result = cn("base", undefined, null, "active")
    expect(result).toBe("base active")
  })
})
